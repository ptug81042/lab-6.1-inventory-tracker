// filepath: c:\Users\parsa\OneDrive\Desktop\2025-RTT-30\lab-6.1-inventory-tracker\src\utils\productSorter.ts
import { Product } from "../models/Product";

export type SortBy = "price" | "name";
export type SortOrder = "asc" | "desc";

/**
 * Sorts products by price or name.
 * @param products Array of Product objects
 * @param sortBy Field to sort by: "price" or "name"
 * @param order "asc" for ascending, "desc" for descending
 */
export function sortProducts(
    products: Product[],
    sortBy: SortBy = "price",
    order: SortOrder = "asc"
): Product[] {
    const sorted = [...products];
    sorted.sort((a, b) => {
        let compare: number;
        if (sortBy === "price") {
            compare = a.price - b.price;
        } else {
            compare = a.name.localeCompare(b.name);
        }
        return order === "asc" ? compare : -compare;
    });
    return sorted;
}