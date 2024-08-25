"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractComponentNames = void 0;
function extractComponentNames(importsMap) {
    var componentNames = [];
    for (var packageName in importsMap) {
        if (importsMap.hasOwnProperty(packageName)) {
            var components = importsMap[packageName];
            componentNames.push.apply(componentNames, components); // Spread the components array and add to the result array
        }
    }
    return componentNames;
}
exports.extractComponentNames = extractComponentNames;
