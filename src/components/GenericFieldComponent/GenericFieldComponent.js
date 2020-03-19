"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SignatureFieldComponent_1 = __importDefault(require("../SignatureFieldComponent/SignatureFieldComponent"));
const SimpleFieldComponent_1 = __importDefault(require("../SimpleFieldComponent/SimpleFieldComponent"));
const types_1 = require("../../types");
const util_1 = require("../../util");
const GenericFieldComponent = ({ field }) => {
    if (field.type === types_1.DocumentFieldType.SignatureFieldType) {
        return (react_1.default.createElement(SignatureFieldComponent_1.default, { field: field }));
    }
    const value = util_1.getDisplayValues(field);
    return react_1.default.createElement(SimpleFieldComponent_1.default, { label: field.details.label, value: value });
};
exports.default = GenericFieldComponent;
