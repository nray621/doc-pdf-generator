import { DocumentSignatureField } from "../types"
import React from 'react'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import moment from "moment";


const styles = StyleSheet.create({
  fieldItem: {
    marginBottom: 10,
    width: '50%',
  },
  image: {
    marginVertical: 5,
    width: '100%',
  },
  labelText: {
    fontFamily: 'Roboto-bold',
    marginBottom: 5,
  },
  legalTextContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  legalText: {
    flex: 1,
    fontSize: 8,
    marginLeft: 10,
  },
  legalTextCheckIcon: {
    height: 18,
    width: 18,
  },
  signedAtText: {
    color: '#A1A3A6',
    marginTop: 5,
    marginBottom: 10,
  }
});

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
