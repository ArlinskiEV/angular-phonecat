"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhoneListController = /** @class */ (function () {
    function PhoneListController(phone) {
        var _this = this;
        phone.query().subscribe(function (phones) {
            _this.phones = phones;
        });
        this.orderProp = 'age';
    }
    PhoneListController.$inject = ['phone'];
    return PhoneListController;
}());
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map