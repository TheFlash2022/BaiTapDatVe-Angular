import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
let GheComponent = class GheComponent {
    constructor() {
        this.selectChair = new EventEmitter();
        this.isSelectedChair = false;
    }
    ngOnInit() { }
    handleSelect() {
        this.isSelectedChair = !this.isSelectedChair;
        this.selectChair.emit(this.chair);
    }
};
__decorate([
    Input()
], GheComponent.prototype, "chair", void 0);
__decorate([
    Output()
], GheComponent.prototype, "selectChair", void 0);
GheComponent = __decorate([
    Component({
        selector: "app-ghe",
        template: `<button
    [ngClass]="{ 'bg-danger': chair.TrangThai, 'bg-success': isSelectedChair }"
    class="chair"
    [disabled]="chair.TrangThai"
    (click)="handleSelect()"
  >
    {{ chair.SoGhe }}
  </button>`,
        styles: [
            `
      .chair {
        width: 65px;
        height: 65px;
        border-radius: 10px;
        margin-right: 7px;
        margin-bottom: 7px;
        border: none;
      }
    `,
        ],
    })
], GheComponent);
export { GheComponent };
//# sourceMappingURL=ghe.component.js.map