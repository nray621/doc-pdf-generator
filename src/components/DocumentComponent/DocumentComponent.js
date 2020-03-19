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
// Register font and bold font
renderer_1.Font.register({ family: 'Roboto', src: 'src/font/Roboto-Regular.ttf' });
renderer_1.Font.register({ family: 'Roboto-bold', src: 'src/font/Roboto-Medium.ttf' });
// Create styles
const styles = renderer_1.StyleSheet.create({
    page: {
        padding: 20,
        flexDirection: 'column',
        fontSize: 11,
        fontFamily: 'Roboto',
    },
    section: {
        paddingVertical: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
    },
    headerContainer: {
        flexWrap: 'nowrap',
        justifyContent: "space-between",
    },
    header: {
        fontSize: 32,
        textAlign: "left",
        fontFamily: 'Roboto-bold'
    },
    subheader: {
        fontFamily: 'Roboto-bold',
        width: '100%',
        fontSize: 16,
        marginBottom: 15,
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: '#A1A3A6',
    },
});
const DocumentComponent = ({ orgName, driverName, vehicleId, notes, updatedAt, submittedAt, nonMediaFields, mediaFields, templateName, }) => (react_1.default.createElement(renderer_1.Document, null,
    react_1.default.createElement(renderer_1.Page, { size: "A4", style: styles.page },
        react_1.default.createElement(renderer_1.View, { style: [styles.section, styles.headerContainer] },
            react_1.default.createElement(renderer_1.Text, { style: styles.header }, templateName || ''),
            react_1.default.createElement(renderer_1.Text, { style: styles.header }, orgName || '')),
        react_1.default.createElement(renderer_1.View, { style: styles.section },
            react_1.default.createElement(renderer_1.Text, { style: styles.subheader }, "Submission Details"),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Driver", value: driverName || 'No driver data' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Vehicle", value: vehicleId || 'No vehicle data' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Updated At", value: updatedAt || '' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Submitted At", value: submittedAt || '' }),
            react_1.default.createElement(SimpleFieldComponent_1.default, { label: "Notes", value: notes || '' })),
        react_1.default.createElement(renderer_1.View, { style: [styles.section, { borderWidth: 0 }] },
            react_1.default.createElement(renderer_1.Text, { style: styles.subheader }, "Document Form Details"),
            nonMediaFields.map((field, idx) => react_1.default.createElement(GenericFieldComponent_1.default, { field: field, key: field.details.label + idx }))),
        mediaFields.map((field, idx) => react_1.default.createElement(MediaFieldComponent_1.default, { field: field, key: field.details.label + idx })),
        react_1.default.createElement(renderer_1.Text, { fixed: true, style: styles.pageNumber, render: ({ pageNumber, totalPages }) => (`Page ${pageNumber} of ${totalPages}`) }))));
exports.default = DocumentComponent;
