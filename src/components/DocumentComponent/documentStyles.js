"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderer_1 = require("@react-pdf/renderer");
exports.default = renderer_1.StyleSheet.create({
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
