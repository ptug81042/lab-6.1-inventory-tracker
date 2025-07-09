"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
/**
 * Calculates the final price of a product including its applicable tax.
 * Uses the product's getPriceWithTax() method for flexibility.
 * @param product - The product instance to calculate tax for.
 * @returns The price including tax.
*/
function calculateTax(product) {
    return product.getPriceWithTax();
}
