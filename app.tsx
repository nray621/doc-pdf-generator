import React from 'react'
import moment from 'moment'
import ReactPDF from '@react-pdf/renderer';
import { DriverDocumentQuery } from './src/types'
import { parseDocumentFields } from './src/util'
import DocumentComponent from './src/components/DocumentComponent/DocumentComponent';
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

if (!sampleJSON?.data) {
  console.error('Invalid JSON')
  process.exit(1)
}

const docQueryData: DriverDocumentQuery = sampleJSON.data
const document = docQueryData.group?.organization.driverDocument

if (!document) {
  console.error('Invalid JSON')
  process.exit(1)
}

const { mediaFields, nonMediaFields } = parseDocumentFields(document)

ReactPDF.render(
  <DocumentComponent
    orgName={docQueryData.group?.organization.name}
    driverName={document.driverName}
    vehicleId={document.vehicle?.id.toString()}
    nonMediaFields={nonMediaFields}
    mediaFields={mediaFields}
    notes={document.notes}
    updatedAt={moment(document.serverUpdatedAtMs).format('LLL')}
    submittedAt={moment(document.driverCreatedAtMs).format('LLL')}
    templateName={document.template?.name}
  />,
  `./example.pdf`
)
  .then(() => {
    // TODO: what exactly do we want to return / log on success
    console.log('SUCCESS')
  })
  .catch(err => {
    console.log('ERROR: ', err.message)
  })




