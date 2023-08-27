import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectivesComponent } from "./directives.component";
import { FormsModule } from "@angular/forms";
import { DemoNgContentComponent } from './demo-ng-content/demo-ng-content.component';
import { Baitap5Component } from './baitap5/baitap5.component';
let DirectivesModule = class DirectivesModule {
};
DirectivesModule = __decorate([
    NgModule({
        declarations: [DirectivesComponent, DemoNgContentComponent, Baitap5Component],
        imports: [CommonModule, FormsModule],
        exports: [DirectivesComponent],
    })
], DirectivesModule);
export { DirectivesModule };
//# sourceMappingURL=directives.module.js.map