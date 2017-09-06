"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AboutComponent = (function () {
    function AboutComponent(meta, title) {
        title.setTitle('My about page');
        meta.addTags([
            {
                name: 'author', content: 'Gary Simon'
            },
            {
                name: 'keywords', content: 'kws'
            },
            {
                name: 'description', content: 'aaaaaaaaaaaaaaaaaaaaaa.'
            },
        ]);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            },] },
];
/** @nocollapse */
AboutComponent.ctorParameters = function () { return [
    { type: platform_browser_1.Meta, },
    { type: platform_browser_1.Title, },
]; };
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map