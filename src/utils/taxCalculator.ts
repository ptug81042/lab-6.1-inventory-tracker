import { Product } from '../models/Product';

/**
 * Calculates the final price of a product including its applicable tax.
 * Uses the product's getPriceWithTax() method for flexibility.
 * @param product - The product instance to calculate tax for.
 * @returns The price including tax.
*/

export function calculateTax (product: Product): number {
    return product.getPriceWithTax();
}