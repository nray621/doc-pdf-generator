"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const moment_1 = __importDefault(require("moment"));
const renderer_1 = __importStar(require("@react-pdf/renderer"));
const FieldComponent_1 = __importDefault(require("./src/components/FieldComponent"));
const util_1 = require("./src/util");
const SimpleFieldItem_1 = __importDefault(require("./src/components/SimpleFieldItem"));
const MediaFieldComponent_1 = __importDefault(require("./src/components/MediaFieldComponent"));
const path = process.argv[2] || './demo.json';
const sampleJSON = require(path); // using static sample JSON (from a real query) for easier development for now
// TODO: decide how we'd like to handle JSON CLI argument
// if we want to pass the entire JSON string:
// I have had trouble testing this because the way the command line parses a giant JSON string and
// needing to exacpe the internal quotation marks. It should work in theory as long as go's cmd API
// provides a way to get around the string arg issue
// const sampleJSON = JSON.parse(process.argv[2])
// if we want to pass a file path:
// I have tested this and it works fine
// const path = process.argv[2]
// const sampleJSON = require(path)
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
const docQueryData = sampleJSON.data;
const document = (_a = docQueryData.group) === null || _a === void 0 ? void 0 : _a.organization.driverDocument;
if (!document) {
    console.error('Invalid JSON');
}
else {
    const { mediaFields, nonMediaFields } = util_1.parseDocumentFields(document);
    const updatedAt = moment_1.default(document === null || document === void 0 ? void 0 : document.serverUpdatedAtMs).format('LLL');
    const submittedAt = moment_1.default(document === null || document === void 0 ? void 0 : document.driverCreatedAtMs).format('LLL');
    const DocumentPDF = () => {
        var _a, _b, _c;
        return (react_1.default.createElement(renderer_1.Document, null,
            react_1.default.createElement(renderer_1.Page, { size: "A4", style: styles.page },
                react_1.default.createElement(renderer_1.View, { style: [styles.section, styles.headerContainer] },
                    react_1.default.createElement(renderer_1.Text, { style: styles.header }, (_a = document === null || document === void 0 ? void 0 : document.template) === null || _a === void 0 ? void 0 : _a.name),
                    react_1.default.createElement(renderer_1.Text, { style: styles.header }, (_b = docQueryData.group) === null || _b === void 0 ? void 0 : _b.organization.name)),
                react_1.default.createElement(renderer_1.View, { style: styles.section },
                    react_1.default.createElement(renderer_1.Text, { style: styles.subheader }, "Submission Details"),
                    react_1.default.createElement(SimpleFieldItem_1.default, { label: "Driver", value: (document === null || document === void 0 ? void 0 : document.driverName) || 'No driver data' }),
                    react_1.default.createElement(SimpleFieldItem_1.default, { label: "Vehicle", value: ((_c = document === null || document === void 0 ? void 0 : document.vehicle) === null || _c === void 0 ? void 0 : _c.id.toString()) || 'No vehicle data' }),
                    react_1.default.createElement(SimpleFieldItem_1.default, { label: "Updated At", value: updatedAt }),
                    react_1.default.createElement(SimpleFieldItem_1.default, { label: "Submitted At", value: submittedAt }),
                    react_1.default.createElement(SimpleFieldItem_1.default, { label: "Notes", value: (document === null || document === void 0 ? void 0 : document.notes) || '' })),
                react_1.default.createElement(renderer_1.View, { style: [styles.section, { borderWidth: 0 }] },
                    react_1.default.createElement(renderer_1.Text, { style: styles.subheader }, "Document Form Details"),
                    nonMediaFields.map((field, idx) => react_1.default.createElement(FieldComponent_1.default, { field: field, key: field.details.label + idx }))),
                mediaFields.map((field, idx) => react_1.default.createElement(MediaFieldComponent_1.default, { field: field, key: field.details.label + idx })),
                react_1.default.createElement(renderer_1.Text, { fixed: true, style: styles.pageNumber, render: ({ pageNumber, totalPages }) => (`Page ${pageNumber} of ${totalPages}`) }))));
    };
    renderer_1.default.render(react_1.default.createElement(DocumentPDF, null), `./example.pdf`)
        .then(() => {
        // TODO: what exactly do we want to return / log on success
        console.log('SUCCESS');
    })
        .catch(err => {
        // TODO: what exactly do we want to return / log on failure
        console.log('ERROR: ', err.message);
    });
}
//# sourceMappingURL=app.js.map