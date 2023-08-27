import { __decorate } from "tslib";
import { Component, ViewChild } from "@angular/core";
let BaiTap1Component = class BaiTap1Component {
    constructor() {
        this.name = "";
        this.price = 0;
    }
    ngOnInit() { }
    handleSave() {
        this.buttonTemplate.nativeElement.innerHTML = "Submit";
        const newProduct = {
            id: Date.now(),
            name: this.name,
            price: this.price,
        };
        this.productListTemplate.productList.push(newProduct);
    }
};
__decorate([
    ViewChild("buttonTmp")
], BaiTap1Component.prototype, "buttonTemplate", void 0);
__decorate([
    ViewChild("productListTmp")
], BaiTap1Component.prototype, "productListTemplate", void 0);
BaiTap1Component = __decorate([
    Component({
        selector: "app-bai-tap-1",
        template: ` <div class="w-50 mt-5 container">
      <div class="form-group">
        <label for="">Name</label>
        <input class="form-control" type="text" [(ngModel)]="name" />
      </div>
      <div class="form-group">
        <label for="">Price</label>
        <input class="form-control" type="text" [(ngModel)]="price" />
      </div>
      <button (click)="handleSave()" #buttonTmp class="btn btn-success w-100">
        Save
      </button>
    </div>
    <app-product-list #productListTmp></app-product-list>`,
    })
], BaiTap1Component);
export { BaiTap1Component };
//# sourceMappingURL=bai-tap-1.component.js.map