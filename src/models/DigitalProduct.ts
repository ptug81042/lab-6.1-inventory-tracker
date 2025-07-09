import { Product } from "./Product";

export class DigitalProduct extends Product {
    fileSize: number; // in megabytes
    
    constructor (sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    // Digital products are tax-exempt
    override getPriceWithTax(): number {
        return this.price;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }
}