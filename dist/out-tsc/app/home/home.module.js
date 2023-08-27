import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        declarations: [
            CarouselComponent,
            MoviesComponent,
            HomeComponent
        ],
        imports: [
            CommonModule,
            SharedModule
        ],
        exports: [
            HomeComponent
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map