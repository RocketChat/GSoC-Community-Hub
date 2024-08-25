import { execSync } from "child_process";

export function installPackages(directory: string, packages: string[], installedPackages: Set<string>): void {
    const newPackages = packages.filter(pkg => !installedPackages.has(pkg));
    
    if (newPackages.length > 0) {
      console.log(`Installing packages in ${directory}: ${newPackages.join(", ")}`);
      
      try {
        execSync(`pnpm install ${newPackages.join(" ")}`, { cwd: directory, stdio: 'inherit' });
        newPackages.forEach(pkg => installedPackages.add(pkg));
        console.log("Packages installed successfully.");
      } catch (error) {
        console.error("Error installing packages:", error);
      }
    } else {
      console.log("All packages are already installed.");
    }
  }