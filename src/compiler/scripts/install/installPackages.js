"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installPackages = void 0;
var child_process_1 = require("child_process");
function installPackages(directory, packages, installedPackages) {
    var newPackages = packages.filter(function (pkg) { return !installedPackages.has(pkg); });
    if (newPackages.length > 0) {
        console.log("Installing packages in ".concat(directory, ": ").concat(newPackages.join(", ")));
        try {
            (0, child_process_1.execSync)("pnpm install ".concat(newPackages.join(" ")), { cwd: directory, stdio: 'inherit' });
            newPackages.forEach(function (pkg) { return installedPackages.add(pkg); });
            console.log("Packages installed successfully.");
        }
        catch (error) {
            console.error("Error installing packages:", error);
        }
    }
    else {
        console.log("All packages are already installed.");
    }
}
exports.installPackages = installPackages;
