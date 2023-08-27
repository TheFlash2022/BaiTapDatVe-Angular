import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
let ProductComponent = class ProductComponent {
    constructor() {
        this.remove = new EventEmitter();
    }
    ngOnInit() { }
    handleRemove() {
        this.remove.emit(this.productItem);
    }
};
__decorate([
    Input()
], ProductComponent.prototype, "productItem", void 0);
__decorate([
    Output()
], ProductComponent.prototype, "remove", void 0);
ProductComponent = __decorate([
    Component({
        selector: "app-product",
        template: `
    <div class="card" (click)="handleRemove()">
      <div class="card-body">
        <h4 class="card-title">{{ productItem.name }}</h4>
        <p class="card-text">{{ productItem.price }}</p>
      </div>
    </div>
  `,
    })
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map