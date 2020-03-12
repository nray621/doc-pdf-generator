import React from 'react'
import moment from 'moment'

import ReactPDF, { Page, Text, View, Document, Font, StyleSheet } from '@react-pdf/renderer';
import FieldComponent from './src/components/FieldComponent'
import { DriverDocumentQuery } from './src/types'
import { parseDocumentFields } from './src/util'
import SimpleFieldItem from './src/components/SimpleFieldItem';
import MediaFieldComponent from './src/components/MediaFieldComponent';
const path = process.argv[2] || './demo.json'
const sampleJSON = require(path) // using static sample JSON (from a real query) for easier development for now

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
Font.register({ family: 'Roboto', src: 'src/font/Roboto-Regular.ttf' });
Font.register({ family: 'Roboto-bold', src: 'src/font/Roboto-Medium.ttf' });

// Create styles
const styles = StyleSheet.create({
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

const docQueryData: DriverDocumentQuery = sampleJSON.data
const document = docQueryData.group?.organization.driverDocument

if (!document) {
  console.error('Invalid JSON')
} else {
  const { mediaFields, nonMediaFields } = parseDocumentFields(document)
  const updatedAt = moment(document?.serverUpdatedAtMs).format('LLL')
  const submittedAt = moment(document?.driverCreatedAtMs).format('LLL')

  const DocumentPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={[styles.section, styles.headerContainer]}>
          <Text style={styles.header}>{document?.template?.name}</Text>
          <Text style={styles.header}>{docQueryData.group?.organization.name}</Text>
        </View>

        {/* Submission Details */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Submission Details</Text>
          <SimpleFieldItem label="Driver" value={document?.driverName || 'No driver data'} />
          <SimpleFieldItem label="Vehicle" value={document?.vehicle?.id.toString() || 'No vehicle data'} />
          <SimpleFieldItem label="Updated At" value={updatedAt} />
          <SimpleFieldItem label="Submitted At" value={submittedAt} />
          <SimpleFieldItem label="Notes" value={document?.notes || ''} />
        </View>

        {/* Field Values */}
        <View style={[styles.section, { borderWidth: 0 }]}>
          <Text style={styles.subheader}>Document Form Details</Text>
          {nonMediaFields.map((field, idx) => <FieldComponent field={field} key={field.details.label + idx}/>)}
        </View>
        {/* Media fields with values are rendered on their own page */}
        {mediaFields.map((field, idx) => <MediaFieldComponent field={field} key={field.details.label + idx} />)}

        {/* Page numbers */}
        <Text
          fixed
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => (
            `Page ${pageNumber} of ${totalPages}`
          )}
        />
      </Page>
    </Document>
  );

  ReactPDF.render(<DocumentPDF />, `./example.pdf`)
    .then(() => {
      // TODO: what exactly do we want to return / log on success
      console.log('SUCCESS')
    })
    .catch(err => {
      // TODO: what exactly do we want to return / log on failure
      console.log('ERROR: ', err.message)
    })
}


