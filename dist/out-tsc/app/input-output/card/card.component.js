import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
let CardComponent = class CardComponent {
    constructor() {
        this.remove = new EventEmitter();
    }
    ngOnInit() { }
    handleRemove() {
        this.remove.emit(this.user);
    }
};
__decorate([
    Input()
], CardComponent.prototype, "user", void 0);
__decorate([
    Output()
], CardComponent.prototype, "remove", void 0);
CardComponent = __decorate([
    Component({
        selector: "app-card",
        templateUrl: "./card.component.html",
        styleUrls: ["./card.component.scss"],
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map