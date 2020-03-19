"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("@react-pdf/renderer");
const globalStyles_1 = __importDefault(require("../globalStyles"));
exports.default = renderer_1.StyleSheet.create(Object.assign({ image: {
        marginVertical: 5,
        width: '100%',
    }, legalTextContainer: {
        flexDirection: 'row',
        marginRight: 15,
    }, legalText: {
        flex: 1,
        fontSize: 8,
        marginLeft: 10,
    }, legalTextCheckIcon: {
        height: 18,
        width: 18,
    }, signedAtText: {
        color: '#A1A3A6',
        marginTop: 5,
        marginBottom: 10,
    } }, globalStyles_1.default));
