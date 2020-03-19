"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const moment_1 = __importDefault(require("moment"));
const signatureFieldStyles_1 = __importDefault(require("./signatureFieldStyles"));
const SignatureFieldComponent = ({ field }) => {
    return (react_1.default.createElement(renderer_1.View, { style: signatureFieldStyles_1.default.fieldItem, wrap: false },
        react_1.default.createElement(renderer_1.Text, { style: signatureFieldStyles_1.default.labelText }, field.details.label),
        field.value.signatureBase64 ?
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(renderer_1.Image, { style: signatureFieldStyles_1.default.image, src: field.value.signatureBase64 }),
                react_1.default.createElement(renderer_1.Text, null, field.value.name),
                react_1.default.createElement(renderer_1.Text, { style: signatureFieldStyles_1.default.signedAtText },
                    "Signed ",
                    moment_1.default(field.value.signedAtMs).format('LLL')),
                react_1.default.createElement(renderer_1.View, { style: signatureFieldStyles_1.default.legalTextContainer },
                    react_1.default.createElement(renderer_1.Image, { allowDangerousPaths: true, src: 'src/img/check.png', style: signatureFieldStyles_1.default.legalTextCheckIcon }),
                    react_1.default.createElement(renderer_1.Text, { style: signatureFieldStyles_1.default.legalText }, field.details.legalText)))
            :
                react_1.default.createElement(renderer_1.Text, null, "No signature entered")));
};
exports.default = SignatureFieldComponent;
