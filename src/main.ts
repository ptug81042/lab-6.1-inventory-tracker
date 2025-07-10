import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import { sortProducts } from "./utils/ProductSorter";

// Create sample products
const products = [
    new PhysicalProduct("PHYS-001", "Wireless Mouse", 29.99, 0.2),
    new PhysicalProduct("PHYS-002", "Mechanical Keyboard", 89.99, 1.1),
    new PhysicalProduct("PHYS-003", "Standing Desk", 299.99, 25),
    new DigitalProduct("DIGI-001", "Ebook: TypeScript Mastery", 14.99, 5.5),
    new DigitalProduct("DIGI-002", "Online Course: OOP in TS", 49.99, 0.0),
];

// Demonstrate sorting
console.log("Sorted by price (ascending):");
for (const product of sortProducts(products, "price", "asc")) {
    console.log(product.displayDetails());
}
console.log("-----");

console.log("Sorted by name (descending):");
for (const product of sortProducts(products, "name", "desc")) {
    console.log(product.displayDetails());
}
console.log("-----");

// Demonstrate discounts and bulk discounts
const bulkOrderQuantity = 12;

for (const product of products) {
    console.log(product.displayDetails());

    // Show extra info based on product type
    if (product instanceof PhysicalProduct) {
        console.log(`Weight: ${product.formattedWeight}`);

        // Apply a 10% discount to all physical products
        product.applyDiscount(10);
        console.log(`After 10% discount: $${product.price.toFixed(2)}`);

        // Apply bulk discount if applicable
        product.applyBulkDiscount(bulkOrderQuantity);
        console.log(`After bulk discount (if eligible): $${product.price.toFixed(2)}`);
    } else if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }

    const finalPrice = calculateTax(product);
    console.log(`Final Price (with tax): $${finalPrice.toFixed(2)}`);
    console.log("-----");
}