import { __decorate } from "tslib";
import { Component } from "@angular/core";
let Baitap5Component = class Baitap5Component {
    constructor() {
        this.username = "";
        this.password = "";
        this.isLogin = false;
    }
    ngOnInit() { }
    handleLogin() {
        if (this.username === "cybersoft" && this.password === "cybersoft") {
            this.isLogin = true;
        }
        else {
            this.isLogin = false;
        }
    }
};
Baitap5Component = __decorate([
    Component({
        selector: "app-baitap5",
        templateUrl: "./baitap5.component.html",
        styleUrls: ["./baitap5.component.scss"],
    })
], Baitap5Component);
export { Baitap5Component };
//# sourceMappingURL=baitap5.component.js.map