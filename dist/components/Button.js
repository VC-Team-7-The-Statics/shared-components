Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Button = (_ref) => {
  let { text } = _ref;
  return /*#__PURE__*/ _react.default.createElement(
    "button",
    {
      type: "button",
    },
    text
  );
};

var _default = Button;
exports.default = _default;
