"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const simpleFieldStyles_1 = __importDefault(require("./simpleFieldStyles"));
const SimpleFieldComponent = ({ label, value }) => (react_1.default.createElement(renderer_1.View, { style: simpleFieldStyles_1.default.fieldItem, wrap: false },
    react_1.default.createElement(renderer_1.Text, { style: simpleFieldStyles_1.default.labelText }, label),
    react_1.default.createElement(renderer_1.Text, { style: simpleFieldStyles_1.default.valueText }, value)));
exports.default = SimpleFieldComponent;
