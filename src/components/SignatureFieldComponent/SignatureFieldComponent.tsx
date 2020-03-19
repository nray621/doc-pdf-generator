import { DocumentSignatureField } from "../../types"
import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer';
import moment from "moment";
import styles from './signatureFieldStyles'

const SignatureFieldComponent: React.FC<{field: DocumentSignatureField}> = ({ field }) => {
  return (
    <View style={styles.fieldItem} wrap={false}>
      <Text style={styles.labelText}>{field.details.label}</Text>
      {field.value.signatureBase64 ?
        <>
          <Image style={styles.image} src={field.value.signatureBase64} />
          <Text>{field.value.name}</Text>
          <Text style={styles.signedAtText}>Signed {moment(field.value.signedAtMs).format('LLL')}</Text>
          <View style={styles.legalTextContainer}>
            <Image allowDangerousPaths src={'src/img/check.png'} style={styles.legalTextCheckIcon}/>
            <Text style={styles.legalText}>{field.details.legalText}</Text>
          </View>
        </>
        :
        <Text>No signature entered</Text>
      }
    </View>
  )
}


export default SignatureFieldComponent
