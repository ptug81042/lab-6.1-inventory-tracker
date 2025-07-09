"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    Product.prototype.displayDetails = function () {
        return "Product [SKU: ".concat(this.sku, "] - \"").concat(this.name, "\" costs $").concat(this.price.toFixed(2));
    };
    Product.prototype.getPriceWithTax = function (taxRate) {
        if (taxRate === void 0) { taxRate = 0.13; }
        // Calculates price including tax (default 13%)
        return +(this.price * (1 + taxRate)).toFixed(2);
    };
    return Product;
}());
exports.Product = Product;
