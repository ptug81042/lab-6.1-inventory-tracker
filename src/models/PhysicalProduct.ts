import { Product } from "./Product";

export class PhysicalProduct extends Product {
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
}