var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="typings/tsd.d.ts" />
var Greeter = (function (_super) {
    __extends(Greeter, _super);
    function Greeter() {
        _super.apply(this, arguments);
    }
    Greeter.prototype.render = function () {
        return React.createElement("div", null, "Hello, ", this.props.name);
    };
    return Greeter;
})(React.Component);
//stateless functional component SimpleGreeter
var SimpleGreeter = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'world' : _b;
    return React.createElement("div", null, "Hello, ", name);
};
