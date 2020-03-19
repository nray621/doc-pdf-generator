import { DocumentMediaUploadField } from "../../types"
import React from 'react'
import { Text, Image, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  fieldItem: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
  image: {
    marginTop: 5,
    flex: 1,
  },
  labelText: {
    fontFamily: 'Roboto-bold',
  },
  page: {
    padding: 20,
    flexDirection: 'column',
    fontSize: 11,
    fontFamily: 'Roboto',
  },
});

const MediaFieldComponent: React.FC<{field: DocumentMediaUploadField}> = ({ field }) => {
  return (
    <>
      {field.value.values.map((media, idx) => {
        return (
          <View break key={media.uuid}>
            <Text style={styles.labelText}>{field.details.label} image {idx + 1}</Text>
            <Image style={styles.image} src={media.s3PresignedGetUrl}  key={media.uuid} />
          </View>
        )
      })}
    </>
  )
}

export default MediaFieldComponent
