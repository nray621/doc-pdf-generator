"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const styles = renderer_1.StyleSheet.create({
    fieldItem: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'red',
    },
    image: {
        marginTop: 5,
        flex: 1,
    },
    labelText: {
        fontFamily: 'Roboto-bold',
    },
    page: {
        padding: 20,
        flexDirection: 'column',
        fontSize: 11,
        fontFamily: 'Roboto',
    },
});
const MediaFieldComponent = ({ field }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null, field.value.values.map((media, idx) => {
        return (react_1.default.createElement(renderer_1.View, { break: true, key: media.uuid },
            react_1.default.createElement(renderer_1.Text, { style: styles.labelText },
                field.details.label,
                " image ",
                idx + 1),
            react_1.default.createElement(renderer_1.Image, { style: styles.image, src: media.s3PresignedGetUrl, key: media.uuid })));
    })));
};
exports.default = MediaFieldComponent;
//# sourceMappingURL=MediaFieldComponent.js.map