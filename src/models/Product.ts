export class Product {
    sku: string;
    name: string;
    price: number;

    constructor (sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `Product [SKU: ${this.sku}] - "${this.name}" costs $${this.price.toFixed(2)}`;
    }

    getPriceWithTax(taxRate: number = 0.13): number {
        // Calculates price including tax (default 13%)
        return +(this.price * (1 + taxRate)).toFixed(2);
    }
}