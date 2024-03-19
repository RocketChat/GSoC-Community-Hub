package main

import (
	"bufio"
	"fmt"
	"os"
	"os/exec"
	"strings"
)


func main() {

	// get the root path of the project
	cmd := exec.Command("bash","./package/getenv.sh")
    output, err := cmd.CombinedOutput()
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Output:", string(output))

	// run the node script to get the path of the payload.config.js file
	cmd2 := exec.Command("node","./package/getConfig.js")
	cmd2.Stdin = strings.NewReader(string(output))
	fmt.Println("Input:", cmd2.Stdin)
    output1, err1 := cmd2.CombinedOutput()
    if err1 != nil {
        fmt.Println("Error:", err1)
        return
    }
    fmt.Println("Output2:", string(output1))


	payloadConfigPath := strings.TrimSpace(string(output1))

	// open the payload.config.js file and add the user import and add user to the collections array
	file, err := os.Open(payloadConfigPath)
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer file.Close()

	var lines []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, `import Navbar from "@repo/npm-payload";`) {
			continue
		}
		if strings.Contains(line, "collections:[") || strings.Contains(line, "collections: [") {
			var idx int
			if strings.Contains(line, "collections:[") {
				idx = strings.Index(line, ":[")
			} else {
				idx = strings.Index(line, ": [")
			}
			if idx != -1 {
				line = line[:idx+3] + "Navbar," + line[idx+3:]
			}
			
			lines = append(lines, line)
			continue
		}

		lines = append(lines, line)

	}

	if err := scanner.Err(); err != nil {
		fmt.Println("Error scanning file:", err)
		return
	}

	lines = append([]string{`import Navbar from "@repo/npm-payload";`}, lines...)

	updatedFile, err := os.Create(payloadConfigPath)
	if err != nil {
		fmt.Println("Error creating updated file:", err)
		return
	}
	defer updatedFile.Close()

	for _, line := range lines {
		_, err := updatedFile.WriteString(line + "\n")
		if err != nil {
			fmt.Println("Error writing to updated file:", err)
			return
		}
	}

	fmt.Println("User imported and added to collections array successfully.")

	///===================================================
	// run the node script to seed the data using local api
	// cmd3 := exec.Command("tsx","./package/seed/seed.js")
	// fmt.Println("Input1:", cmd3.Stdin)
    // output2, err2 := cmd3.CombinedOutput()
    // if err2 != nil {
		//     fmt.Println("Error:", err2)
		//     return
		// }
		// fmt.Println("Output2+:", string(output2))
		
	cmd3 := exec.Command("node","./express/seed.js")
	cmd3.Stdin = strings.NewReader(string(output))
    output2, err2 := cmd3.CombinedOutput()
    if err2 != nil {
        fmt.Println("Error:", err2)
        return
    }
    fmt.Println("Output2+:", string(output2))
}
