import React from 'react'
import SignatureFieldComponent from "./SignatureFieldComponent";
import SimpleFieldItem from "./SimpleFieldItem";
import { DocumentField, DocumentFieldType } from "../types"
import { getDisplayValues } from "../util"

const FieldComponent: React.FC<{field: DocumentField}> = ({ field }) => {
  if (field.type === DocumentFieldType.SignatureFieldType) {
    return (
      <SignatureFieldComponent field={field} />
    )
  }

  const value = getDisplayValues(field)
  return <SimpleFieldItem label={field.details.label} value={value} />
}

export default FieldComponent
