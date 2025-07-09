"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhysicalProduct_1 = require("./models/PhysicalProduct");
var DigitalProduct_1 = require("./models/DigitalProduct");
var taxCalculator_1 = require("./utils/taxCalculator");
// Create sample products
var products = [
    new PhysicalProduct_1.PhysicalProduct("PHYS-001", "Wireless Mouse", 29.99, 0.2),
    new DigitalProduct_1.DigitalProduct("DIGI-001", "Ebook: TypeScript Mastery", 14.99, 5.5),
];
// Display details and prices for each product
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    console.log(product.displayDetails());
    // Show extra info based on product type
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        console.log("Weight: ".concat(product.formattedWeight));
    }
    else if (product instanceof DigitalProduct_1.DigitalProduct) {
        console.log("File Size: ".concat(product.formattedFileSize));
    }
    var finalPrice = (0, taxCalculator_1.calculateTax)(product);
    console.log("Final Price (with tax): $".concat(finalPrice.toFixed(2)));
    console.log("-----");
}
