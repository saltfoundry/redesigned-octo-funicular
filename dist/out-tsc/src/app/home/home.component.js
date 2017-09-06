"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = (function () {
    function HomeComponent(meta, title) {
        title.setTitle('My Spiffy Home Page');
        meta.addTags([
            {
                name: 'author', content: 'Coursetro.com'
            },
            {
                name: 'keywords', content: 'angular 4 tutorial, angular seo'
            },
            {
                name: 'description', content: 'This is my great description.'
            },
        ]);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = function () { return [
    { type: platform_browser_1.Meta, },
    { type: platform_browser_1.Title, },
]; };
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map