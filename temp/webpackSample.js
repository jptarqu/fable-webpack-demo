var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { setType } from "fable-core/Symbol";
import _Symbol from "fable-core/Symbol";
import { PastHelper } from "./types";
export var webpackSample = function () {
    _createClass(webpackSample, [{
        key: _Symbol.reflection,
        value: function () {
            return {
                type: "webpackSample.webpackSample",
                properties: {
                    X: "string"
                }
            };
        }
    }]);

    function webpackSample() {
        _classCallCheck(this, webpackSample);
    }

    _createClass(webpackSample, [{
        key: "X",
        get: function () {
            return "F#";
        }
    }]);

    return webpackSample;
}();
setType("webpackSample.webpackSample", webpackSample);
export var Sample = function (__exports) {
    var Start = __exports.Start = function () {
        var element = document.getElementById("sample");
        var result = PastHelper.add(1, 3);
        element.innerText = "Hello, world !!" + String(result);
    };

    Start();
    return __exports;
}({});
//# sourceMappingURL=webpackSample.js.map