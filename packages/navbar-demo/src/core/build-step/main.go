package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/otiai10/copy"
)

func compileTypescript() error {
	cmd := exec.Command("node", "esbuild.config.js")
	output, err := cmd.CombinedOutput()
	if err != nil {
		return err
	}
	fmt.Println(string(output))
	return nil
}

func getCollectionPaths(collection string) (string, string) {
	sourcePath := filepath.Join("..", "..", "..", "..", "cms", "src", "api", collection)

	targetPath := filepath.Join("..", "..", "..", "dist", "schema")
	return sourcePath, targetPath
}

func copyCollection(sourcePath, targetPath string) error {
	options := copy.Options{
		OnSymlink:         nil,
		Skip:              nil,
		PermissionControl: copy.PreservePermission,
		PreserveTimes:     true,
	}

	err := copy.Copy(sourcePath, targetPath, &options)
	if err != nil {
		return err
	}
	return nil
}

func copySchema() error {
	schemaPath := filepath.Join("..", "..", "..", "..", "cms", "src", "api", "separator", "content-types", "separator", "schema.json")
	data, err := os.ReadFile(schemaPath)
	if err != nil {
		return err
	}

	err = os.WriteFile("../../dist/schema.json", data, 0644)
	if err != nil {
		return err
	}
	return nil
}

func main() {
	// if err := compileTypescript(); err != nil {
	// 	fmt.Println("Error compiling TypeScript:", err)
	// 	os.Exit(1)
	// }

	collection := "logo"
	sourcePath, targetPath := getCollectionPaths(collection)

	if err := copyCollection(sourcePath, targetPath); err != nil {
		fmt.Println("Error copying directory:", err)
		os.Exit(1)
	}

	// if err := copySchema(); err != nil {
	// 	fmt.Println("Error copying schema:", err)
	// 	os.Exit(1)
	// }
}
