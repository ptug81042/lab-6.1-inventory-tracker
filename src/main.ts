import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

// Create sample products
const products = [
    new PhysicalProduct("PHYS-001", "Wireless Mouse", 29.99, 0.2),
    new DigitalProduct("DIGI-001", "Ebook: TypeScript Mastery", 14.99, 5.5),
];

// Display details and prices for each product
for (const product of products) {
    console.log(product.displayDetails());

    // Show extra info based on product type
    if (product instanceof PhysicalProduct) {
        console.log(`Weight: ${product.formattedWeight}`);
    } else if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }

    const finalPrice = calculateTax(product);
    console.log(`Final Price (with tax): $${finalPrice.toFixed(2)}`);
    console.log("-----");
}