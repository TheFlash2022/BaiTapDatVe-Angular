import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ExerciseComponent } from './exercise/exercise.component';
let DataBindingModule = class DataBindingModule {
};
DataBindingModule = __decorate([
    NgModule({
        declarations: [
            DataBindingComponent,
            OneWayBindingComponent,
            TwoWayBindingComponent,
            ExerciseComponent
        ],
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [
            DataBindingComponent
        ]
    })
], DataBindingModule);
export { DataBindingModule };
//# sourceMappingURL=data-binding.module.js.map