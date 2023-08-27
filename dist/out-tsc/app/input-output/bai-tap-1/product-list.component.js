import { __decorate } from "tslib";
import { ProductComponent } from "./product.component";
import { Component, ViewChildren } from "@angular/core";
let ProductListComponent = class ProductListComponent {
    constructor() {
        this.productList = [
            { id: 1, name: "Product A", price: 10 },
            { id: 2, name: "Product B", price: 50 },
            { id: 3, name: "Product C", price: 70 },
        ];
    }
    ngOnInit() { }
    handleDiscount() {
        this.productComponents.forEach((productComponent) => {
            productComponent.productItem.price -= 10;
        });
    }
    handleRemove(productItem) {
        const idx = this.productList.findIndex((ele) => ele.id === productItem.id);
        if (idx !== -1) {
            this.productList.splice(idx, 1);
        }
    }
};
__decorate([
    ViewChildren(ProductComponent)
], ProductListComponent.prototype, "productComponents", void 0);
ProductListComponent = __decorate([
    Component({
        selector: "app-product-list",
        template: `<div class="mt-5 w-50 mx-auto">
    <div class="row">
      <div class="col-12 my-3">
        <button (click)="handleDiscount()" class="btn btn-info">
          Discount
        </button>
      </div>
      <div class="col-4" *ngFor="let product of productList">
        <app-product
          (remove)="handleRemove($event)"
          [productItem]="product"
        ></app-product>
      </div>
    </div>
  </div>`,
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map