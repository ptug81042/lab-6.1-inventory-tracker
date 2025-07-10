import { Product } from "./Product";
import { DiscountableProduct } from "./DiscountableProduct";

export class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number; // in kilograms

    constructor (sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    // Always applies a 10% tax rate for physical products
    override getPriceWithTax(): number {
        const taxRate = 0.10;
        return +(this.price * (1 + taxRate)).toFixed(2);
    }

    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

    // Implements DiscountableProduct interface
    applyDiscount(discountPercent: number): void {
        if (discountPercent > 0 && discountPercent < 100) {
            this.price = +(this.price * (1 - discountPercent / 100)).toFixed(2);
        }
    }

    // Bulk discount: 5% off if quantity >= 10 or weight >= 5kg
    applyBulkDiscount(quantity: number): void {
        if (quantity >= 10 || this.weight >= 5) {
            this.applyDiscount(5);
        }
    }
}