import { __decorate } from "tslib";
import { Component } from "@angular/core";
// Dạng liệt kệ
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "Active";
    UserStatus["Inactive"] = "Inactive";
    UserStatus["Pending"] = "Pending";
})(UserStatus || (UserStatus = {}));
var ChairStatus;
(function (ChairStatus) {
    ChairStatus["Booked"] = "Booked";
    ChairStatus["Available"] = "Available";
    ChairStatus["Booking"] = "Booking";
})(ChairStatus || (ChairStatus = {}));
let DirectivesComponent = class DirectivesComponent {
    constructor() {
        this.isLogin = false;
        this.users = [
            {
                name: "Man",
                email: "man@gmail.com",
                status: UserStatus.Active,
            },
            {
                name: "Truong",
                email: "truong@gmail.com",
                status: UserStatus.Inactive,
            },
            {
                name: "Khai",
                email: "khai@gmail.com",
                status: UserStatus.Pending,
            },
        ];
        this.status = UserStatus;
        this.chairs = [
            { name: "01", status: ChairStatus.Booked },
            { name: "02", status: ChairStatus.Available },
            { name: "03", status: ChairStatus.Booking },
            { name: "04", status: ChairStatus.Available },
        ];
        this.chairStatus = ChairStatus;
        this.currentStyle = {
            background: "red",
            color: "white",
        };
    }
    ngOnInit() { }
    changeChairStatus(chair) {
        const index = this.chairs.findIndex((ele) => {
            return ele.name === chair.name;
        });
        if (index !== -1) {
            if (chair.status === ChairStatus.Available) {
                this.chairs[index].status = ChairStatus.Booking;
            }
            else {
                this.chairs[index].status = ChairStatus.Available;
            }
        }
    }
};
DirectivesComponent = __decorate([
    Component({
        selector: "app-directives",
        templateUrl: "./directives.component.html",
        styleUrls: ["./directives.component.scss"],
    })
], DirectivesComponent);
export { DirectivesComponent };
//# sourceMappingURL=directives.component.js.map