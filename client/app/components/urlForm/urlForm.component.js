"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var UrlFormComponent = /** @class */ (function () {
    function UrlFormComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.input = '';
        this.isUrlValid = undefined;
        this.countRequest = 0;
        this.domainName = '';
        this.hostName = '';
        this.myUrlList = [];
    }
    UrlFormComponent.prototype.ngOnInit = function () {
        this.getlist();
    };
    UrlFormComponent.prototype.getlist = function () {
        var _this = this;
        this.http.get('/api/myUrls')
            .subscribe(function (results) {
            console.log("results ", results);
            _this.myUrlList = results.json();
        }, function (err) { return console.error(err); });
    };
    UrlFormComponent.prototype.check = function () {
        var reg = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
        //console.log("is url valid",reg.test(this.input))
        return (reg.test(this.input)) ? true : false;
    };
    UrlFormComponent.prototype.save = function () {
        var _this = this;
        console.log(" url is ", this.input);
        var body = { "url": this.input };
        console.log("body sending", body);
        this.http.post('/api/myUrl', body)
            .subscribe(function (results) {
            console.log("results ", results);
            _this.input = '';
            _this.getlist();
        });
    };
    UrlFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'content',
            templateUrl: './urlForm.component.html',
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, http_1.Http])
    ], UrlFormComponent);
    return UrlFormComponent;
}());
exports.UrlFormComponent = UrlFormComponent;
//# sourceMappingURL=urlForm.component.js.map