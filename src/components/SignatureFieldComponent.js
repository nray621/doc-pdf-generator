"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const moment_1 = __importDefault(require("moment"));
const styles = renderer_1.StyleSheet.create({
    fieldItem: {
        marginBottom: 10,
        width: '50%',
    },
    image: {
        marginVertical: 5,
        width: '100%',
    },
    labelText: {
        fontFamily: 'Roboto-bold',
        marginBottom: 5,
    },
    legalTextContainer: {
        flexDirection: 'row',
        marginRight: 15,
    },
    legalText: {
        flex: 1,
        fontSize: 8,
        marginLeft: 10,
    },
    legalTextCheckIcon: {
        height: 18,
        width: 18,
    },
    signedAtText: {
        color: '#A1A3A6',
        marginTop: 5,
        marginBottom: 10,
    }
});
const SignatureFieldComponent = ({ field }) => {
    return (react_1.default.createElement(renderer_1.View, { style: styles.fieldItem, wrap: false },
        react_1.default.createElement(renderer_1.Text, { style: styles.labelText }, field.details.label),
        field.value.signatureBase64 ?
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(renderer_1.Image, { style: styles.image, src: field.value.signatureBase64 }),
                react_1.default.createElement(renderer_1.Text, null, field.value.name),
                react_1.default.createElement(renderer_1.Text, { style: styles.signedAtText },
                    "Signed ",
                    moment_1.default(field.value.signedAtMs).format('LLL')),
                react_1.default.createElement(renderer_1.View, { style: styles.legalTextContainer },
                    react_1.default.createElement(renderer_1.Image, { allowDangerousPaths: true, src: 'src/img/check.png', style: styles.legalTextCheckIcon }),
                    react_1.default.createElement(renderer_1.Text, { style: styles.legalText }, field.details.legalText)))
            :
                react_1.default.createElement(renderer_1.Text, null, "No signature entered")));
};
exports.default = SignatureFieldComponent;
