import React from 'react'
import { Text, View } from '@react-pdf/renderer';
import styles from './simpleFieldStyles'

const SimpleFieldComponent: React.FC<{label: string, value: string}> = ({ label, value }) => (
  <View style={styles.fieldItem} wrap={false}>
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
)

export default SimpleFieldComponent
