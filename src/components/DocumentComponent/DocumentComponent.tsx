import React from 'react'
import { Page, Text, View, Document, Font, StyleSheet } from '@react-pdf/renderer';
import GenericFieldComponent from '../GenericFieldComponent/GenericFieldComponent'
import { DocumentField, DocumentMediaUploadField } from '../../types'
import SimpleFieldItem from '../SimpleFieldComponent/SimpleFieldComponent';
import MediaFieldComponent from '../MediaFieldComponent/MediaFieldComponent';

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

interface Props {
  orgName?: string | null,
  submittedAt?: string,
  updatedAt?: string,
  driverName?: string,
  vehicleId?: string,
  nonMediaFields: DocumentField[],
  mediaFields: DocumentMediaUploadField[],
  notes?: string | null,
  templateName?: string,
}

const DocumentComponent: React.FC<Props> = ({
  orgName,
  driverName,
  vehicleId,
  notes,
  updatedAt,
  submittedAt,
  nonMediaFields,
  mediaFields,
  templateName,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={[styles.section, styles.headerContainer]}>
        <Text style={styles.header}>{templateName || ''}</Text>
        <Text style={styles.header}>{orgName || ''}</Text>
      </View>

      {/* Submission Details */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Submission Details</Text>
        <SimpleFieldItem label="Driver" value={driverName || 'No driver data'} />
        <SimpleFieldItem label="Vehicle" value={vehicleId || 'No vehicle data'} />
        <SimpleFieldItem label="Updated At" value={updatedAt || ''} />
        <SimpleFieldItem label="Submitted At" value={submittedAt || ''} />
        <SimpleFieldItem label="Notes" value={notes || ''} />
      </View>

      {/* Field Values */}
      <View style={[styles.section, { borderWidth: 0 }]}>
        <Text style={styles.subheader}>Document Form Details</Text>
        {nonMediaFields.map((field, idx) => <GenericFieldComponent field={field} key={field.details.label + idx}/>)}
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

export default DocumentComponent
