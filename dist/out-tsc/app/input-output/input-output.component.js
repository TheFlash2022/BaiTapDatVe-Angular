import { __decorate } from "tslib";
import { Component } from "@angular/core";
let InputOutputComponent = class InputOutputComponent {
    constructor() {
        this.users = [
            { name: "Cybersoft", age: 5 },
            { name: "Khai", age: 15 },
            { name: "Tran", age: 25 },
        ];
    }
    ngOnInit() { }
    handleRemove(user) {
        const index = this.users.findIndex((currentUser) => currentUser.name === user.name);
        this.users.splice(index, 1);
    }
};
InputOutputComponent = __decorate([
    Component({
        selector: "app-input-output",
        templateUrl: "./input-output.component.html",
        styleUrls: ["./input-output.component.scss"],
    })
], InputOutputComponent);
export { InputOutputComponent };
//# sourceMappingURL=input-output.component.js.map