import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  fieldItem: {
    width: '50%',
    marginBottom: 10,
  },
  labelText: {
    fontFamily: 'Roboto-bold',
    marginBottom: 5,
  },
  valueText: {
    paddingRight: 15,
  }
});

const SimpleFieldComponent: React.FC<{label: string, value: string}> = ({ label, value }) => (
  <View style={styles.fieldItem} wrap={false}>
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
)

export default SimpleFieldComponent
