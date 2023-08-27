import { __decorate } from "tslib";
import { GheComponent } from './bai-tap-dat-ghe/ghe.component';
import { BaiTapDatGheComponent } from './bai-tap-dat-ghe/bai-tap-dat-ghe.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./bai-tap-1/product.component";
import { ProductListComponent } from "./bai-tap-1/product-list.component";
import { BaiTap1Component } from "./bai-tap-1/bai-tap-1.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputOutputComponent } from "./input-output.component";
import { CardComponent } from "./card/card.component";
let InputOutputModule = class InputOutputModule {
};
InputOutputModule = __decorate([
    NgModule({
        declarations: [
            InputOutputComponent,
            CardComponent,
            BaiTap1Component,
            ProductListComponent,
            ProductComponent,
            BaiTapDatGheComponent,
            GheComponent,
        ],
        imports: [CommonModule, FormsModule],
        exports: [InputOutputComponent],
    })
], InputOutputModule);
export { InputOutputModule };
//# sourceMappingURL=input-output.module.js.map