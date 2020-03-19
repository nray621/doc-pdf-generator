"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const types_1 = require("./types");
exports.parseDocumentFields = (document) => {
    const fieldInputs = (document === null || document === void 0 ? void 0 : document.fieldInputs) || [];
    const fieldTypes = (document === null || document === void 0 ? void 0 : document.fieldTypes) || [];
    const allFields = fieldInputs.map((fieldInput, idx) => exports.generateConsolidatedField(fieldTypes[idx], fieldInput));
    const nonMediaFields = [];
    const mediaFields = [];
    allFields.forEach(field => {
        if ((field === null || field === void 0 ? void 0 : field.type) === types_1.DocumentFieldType.MediaUploadFieldType && field.value.values.length > 0) {
            mediaFields.push(field);
        }
        else if (field) {
            nonMediaFields.push(field);
        }
    });
    return { mediaFields, nonMediaFields };
};
exports.getDisplayValues = (field) => {
    var _a;
    switch (field.type) {
        case types_1.DocumentFieldType.DateTimeFieldType:
            return field.value.dateTimeMs ? moment_1.default(field.value.dateTimeMs).format('LLL') : 'No value';
        case types_1.DocumentFieldType.MediaUploadFieldType:
            return "No images uploaded"; // This value is only used for empty media fields
        case types_1.DocumentFieldType.NumberFieldType:
            return field.value.value ? field.value.value.toString() : 'No value';
        case types_1.DocumentFieldType.OptionSelectFieldType:
            return ((_a = field.value.optionValues.find(val => val.selected)) === null || _a === void 0 ? void 0 : _a.value) || "No value selected";
        case types_1.DocumentFieldType.StringFieldType:
            return field.value.value || "No value";
        default:
            return "No value";
    }
};
/**
 * generateInitializedOptionSelectValues returns an array of option select objects in the form that current document expects
 * with value being the option label, and a bool attribute of 'selected' which is initialized as false
 *
 * @param optionLabels
 */
const generateInitializedOptionSelectValues = (optionLabels) => optionLabels.map(optionLabel => ({
    value: optionLabel.label,
    selected: false,
}));
/**
 * generateConsolidatedField combines the FieldType and FieldInput into a single object.
 *
 * @param fieldTypes
 * @param fieldInputs
 */
exports.generateConsolidatedField = (fieldTypes, fieldInputs) => {
    if (fieldTypes.stringFieldType) {
        return {
            type: types_1.DocumentFieldType.StringFieldType,
            details: fieldTypes.stringFieldType,
            value: (fieldInputs === null || fieldInputs === void 0 ? void 0 : fieldInputs.stringFieldInput) || {
                value: "",
            },
        };
    }
    if (fieldTypes.dateTimeFieldType) {
        return {
            type: types_1.DocumentFieldType.DateTimeFieldType,
            details: fieldTypes.dateTimeFieldType,
            value: (fieldInputs === null || fieldInputs === void 0 ? void 0 : fieldInputs.dateTimeFieldInput) || {
                dateTimeMs: 0,
            },
        };
    }
    if (fieldTypes.mediaUploadFieldType) {
        return {
            type: types_1.DocumentFieldType.MediaUploadFieldType,
            details: fieldTypes.mediaUploadFieldType,
            value: (fieldInputs === null || fieldInputs === void 0 ? void 0 : fieldInputs.mediaUploadFieldInput) || { values: [] },
        };
    }
    if (fieldTypes.numberFieldType) {
        return {
            type: types_1.DocumentFieldType.NumberFieldType,
            details: fieldTypes.numberFieldType,
            value: (fieldInputs === null || fieldInputs === void 0 ? void 0 : fieldInputs.numberFieldInput) || {
                value: 0,
            },
        };
    }
    if (fieldTypes.optionSelectFieldType) {
        return {
            type: types_1.DocumentFieldType.OptionSelectFieldType,
            details: fieldTypes.optionSelectFieldType,
            value: (fieldInputs === null || fieldInputs === void 0 ? void 0 : fieldInputs.optionSelectFieldInput) || {
                optionValues: generateInitializedOptionSelectValues(fieldTypes.optionSelectFieldType.optionLabels),
            },
        };
    }
    if (fieldTypes.signatureFieldType) {
        return {
            type: types_1.DocumentFieldType.SignatureFieldType,
            details: fieldTypes.signatureFieldType,
            value: (fieldInputs === null || fieldInputs === void 0 ? void 0 : fieldInputs.signatureFieldInput) || {
                signedAtMs: 0,
                uuid: "",
                name: "",
                signatureBase64: "",
            },
        };
    }
};
