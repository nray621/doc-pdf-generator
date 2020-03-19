import React from 'react'
import SignatureFieldComponent from "../SignatureFieldComponent/SignatureFieldComponent";
import SimpleFieldComponent from "../SimpleFieldComponent/SimpleFieldComponent";
import { DocumentField, DocumentFieldType } from "../../types"
import { getDisplayValues } from "../../util"

const GenericFieldComponent: React.FC<{field: DocumentField}> = ({ field }) => {
  if (field.type === DocumentFieldType.SignatureFieldType) {
    return (
      <SignatureFieldComponent field={field} />
    )
  }

  const value = getDisplayValues(field)
  return <SimpleFieldComponent label={field.details.label} value={value} />
}

export default GenericFieldComponent
