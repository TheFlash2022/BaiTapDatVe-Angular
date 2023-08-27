import { __decorate } from "tslib";
import { Component } from '@angular/core';
let OneWayBindingComponent = class OneWayBindingComponent {
    constructor() {
        this.username = 'Cybersoft';
    }
    ngOnInit() { }
    populateUsername() {
        return `Hello ${this.username}`;
    }
    changeUsername(value) {
        this.username = value;
    }
    onKeyup(usernameInput) {
        this.username = usernameInput.value;
    }
};
OneWayBindingComponent = __decorate([
    Component({
        selector: 'app-one-way-binding',
        templateUrl: './one-way-binding.component.html',
        styleUrls: ['./one-way-binding.component.scss'],
    })
], OneWayBindingComponent);
export { OneWayBindingComponent };
//# sourceMappingURL=one-way-binding.component.js.map