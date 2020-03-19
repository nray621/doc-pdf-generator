import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer';
import GenericFieldComponent from '../GenericFieldComponent/GenericFieldComponent'
import { DocumentField, DocumentMediaUploadField } from '../../types'
import SimpleFieldItem from '../SimpleFieldComponent/SimpleFieldComponent';
import MediaFieldComponent from '../MediaFieldComponent/MediaFieldComponent';
import styles from './documentStyles'

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
