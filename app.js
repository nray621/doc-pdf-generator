"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const moment_1 = __importDefault(require("moment"));
const renderer_1 = __importDefault(require("@react-pdf/renderer"));
const util_1 = require("./src/util");
const DocumentComponent_1 = __importDefault(require("./src/components/DocumentComponent/DocumentComponent"));
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
if (!(sampleJSON === null || sampleJSON === void 0 ? void 0 : sampleJSON.data)) {
    console.error('Invalid JSON');
    process.exit(1);
}
const docQueryData = sampleJSON.data;
const document = (_a = docQueryData.group) === null || _a === void 0 ? void 0 : _a.organization.driverDocument;
if (!document) {
    console.error('Invalid JSON');
    process.exit(1);
}
const { mediaFields, nonMediaFields } = util_1.parseDocumentFields(document);
renderer_1.default.render(react_1.default.createElement(DocumentComponent_1.default, { orgName: (_b = docQueryData.group) === null || _b === void 0 ? void 0 : _b.organization.name, driverName: document.driverName, vehicleId: (_c = document.vehicle) === null || _c === void 0 ? void 0 : _c.id.toString(), nonMediaFields: nonMediaFields, mediaFields: mediaFields, notes: document.notes, updatedAt: moment_1.default(document.serverUpdatedAtMs).format('LLL'), submittedAt: moment_1.default(document.driverCreatedAtMs).format('LLL'), templateName: (_d = document.template) === null || _d === void 0 ? void 0 : _d.name }), `./example.pdf`)
    .then(() => {
    // TODO: what exactly do we want to return / log on success
    console.log('SUCCESS');
})
    .catch(err => {
    console.log('ERROR: ', err.message);
});
