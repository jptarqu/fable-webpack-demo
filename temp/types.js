var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { setType } from "fable-core/Symbol";
import _Symbol from "fable-core/Symbol";
import { compareRecords, equalsRecords } from "fable-core/Util";
export var Past = function () {
  function Past(va) {
    _classCallCheck(this, Past);

    this.Va = va;
  }

  _createClass(Past, [{
    key: _Symbol.reflection,
    value: function () {
      return {
        type: "webpackSample.Past",
        interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
        properties: {
          Va: "string"
        }
      };
    }
  }, {
    key: "Equals",
    value: function (other) {
      return equalsRecords(this, other);
    }
  }, {
    key: "CompareTo",
    value: function (other) {
      return compareRecords(this, other);
    }
  }]);

  return Past;
}();
setType("webpackSample.Past", Past);
export var PastHelper = function (__exports) {
  var add = __exports.add = function (a1, a2) {
    return a1 + a2;
  };

  return __exports;
}({});
//# sourceMappingURL=types.js.map