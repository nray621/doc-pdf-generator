"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const GenericFieldComponent_1 = __importDefault(require("../GenericFieldComponent/GenericFieldComponent"));
const SimpleFieldComponent_1 = __importDefault(require("../SimpleFieldComponent/SimpleFieldComponent"));
const MediaFieldComponent_1 = __importDefault(require("../MediaFieldComponent/MediaFieldComponent"));
const documentStyles_1 = __importDefault(require("./documentStyles"));
const DocumentComponent = ({ orgName, driverName, vehicleId, notes, updatedAt, submittedAt, nonMediaFields, mediaFields, templateName, }) => (react_1.default.createElement(renderer_1.Document, null,
    react_1.default.createElement(renderer_1.Page, { size: "A4", style: documentStyles_1.default.page },
        react_1.default.createElement(renderer_1.View, { style: [documentStyles_1.default.section, documentStyles_1.default.headerContainer] },
            react_1.default.createElement(renderer_1.Text, { style: documentStyles_1.default.header }, templateName || ''),
            react_1.default.createElement(renderer_1.Text, { style: documentStyles_1.default.header }, orgName || '')),
        react_1.default.createElement(renderer_1.View, { style: documentStyles_1.default.section },
            react_1.default.createElement(renderer_1.Text, { style: documentStyles_1.default.subheader }, "Submission Details"),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Driver", value: driverName || 'No driver data' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Vehicle", value: vehicleId || 'No vehicle data' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Updated At", value: updatedAt || '' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Submitted At", value: submittedAt || '' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Notes", value: notes || '' })),
        react_1.default.createElement(renderer_1.View, { style: [documentStyles_1.default.section, { borderWidth: 0 }] },
            react_1.default.createElement(renderer_1.Text, { style: documentStyles_1.default.subheader }, "Document Form Details"),
            nonMediaFields.map((field, idx) => react_1.default.createElement(GenericFieldComponent_1.default, { field: field, key: field.details.label + idx }))),
        mediaFields.map((field, idx) => react_1.default.createElement(MediaFieldComponent_1.default, { field: field, key: field.details.label + idx })),
        react_1.default.createElement(renderer_1.Text, { fixed: true, style: documentStyles_1.default.pageNumber, render: ({ pageNumber, totalPages }) => (`Page ${pageNumber} of ${totalPages}`) }))));
exports.default = DocumentComponent;
