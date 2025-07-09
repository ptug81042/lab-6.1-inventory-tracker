"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
var Product_1 = require("./Product");
var PhysicalProduct = /** @class */ (function (_super) {
    __extends(PhysicalProduct, _super);
    function PhysicalProduct(sku, name, price, weight) {
        var _this = _super.call(this, sku, name, price) || this;
        _this.weight = weight;
        return _this;
    }
    // Always applies a 10% tax rate for physical products
    PhysicalProduct.prototype.getPriceWithTax = function () {
        var taxRate = 0.10;
        return +(this.price * (1 + taxRate)).toFixed(2);
    };
    Object.defineProperty(PhysicalProduct.prototype, "formattedWeight", {
        get: function () {
            return "".concat(this.weight, " kg");
        },
        enumerable: false,
        configurable: true
    });
    return PhysicalProduct;
}(Product_1.Product));
exports.PhysicalProduct = PhysicalProduct;
