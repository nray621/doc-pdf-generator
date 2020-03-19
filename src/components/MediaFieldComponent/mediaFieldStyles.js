"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("@react-pdf/renderer");
const globalStyles_1 = __importDefault(require("../globalStyles"));
exports.default = renderer_1.StyleSheet.create(Object.assign({ image: {
        marginTop: 5,
        flex: 1,
    } }, globalStyles_1.default));
