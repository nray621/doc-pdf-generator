"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const styles = renderer_1.StyleSheet.create({
    fieldItem: {
        width: '50%',
        marginBottom: 10,
    },
    labelText: {
        fontFamily: 'Roboto-bold',
        marginBottom: 5,
    },
    valueText: {
        paddingRight: 15,
    }
});
const SimpleFieldComponent = ({ label, value }) => (react_1.default.createElement(renderer_1.View, { style: styles.fieldItem, wrap: false },
    react_1.default.createElement(renderer_1.Text, { style: styles.labelText }, label),
    react_1.default.createElement(renderer_1.Text, { style: styles.valueText }, value)));
exports.default = SimpleFieldComponent;
