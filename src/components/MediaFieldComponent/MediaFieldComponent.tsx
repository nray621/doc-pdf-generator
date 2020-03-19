import { DocumentMediaUploadField } from "../../types"
import React from 'react'
import { Text, Image, View } from '@react-pdf/renderer';
import styles from './mediaFieldStyles'

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
