import moment from "moment";
import { DriverDocumentTemplateFieldTypeFragment, DriverDocumentFieldInputFragment, DocumentField, DocumentFieldType, DriverDocumentForOrgFragment, DocumentMediaUploadField } from "./types";

export const parseDocumentFields = (document: DriverDocumentForOrgFragment): {mediaFields: DocumentMediaUploadField[], nonMediaFields: DocumentField[]} => {
  const fieldInputs = document?.fieldInputs || []
  const fieldTypes = document?.fieldTypes || []

  const allFields = fieldInputs.map((fieldInput, idx) => generateConsolidatedField(fieldTypes[idx], fieldInput))
  const nonMediaFields: DocumentField[] = []
  const mediaFields: DocumentMediaUploadField[] = []

  allFields.forEach(field => {
    if (field?.type === DocumentFieldType.MediaUploadFieldType && field.value.values.length > 0) {
      mediaFields.push(field)
    } else if (field) {
      nonMediaFields.push(field)
    }
  })

  return { mediaFields, nonMediaFields }
}

export const getDisplayValues = (field: DocumentField): string => {
  switch (field.type) {
    case DocumentFieldType.DateTimeFieldType:
      return field.value.dateTimeMs ? moment(field.value.dateTimeMs).format('LLL') : 'No value'
    case DocumentFieldType.MediaUploadFieldType:
      return "No images uploaded" // This value is only used for empty media fields
    case DocumentFieldType.NumberFieldType:
      return field.value.value ? field.value.value.toString() : 'No value'
    case DocumentFieldType.OptionSelectFieldType:
      return field.value.optionValues.find(val => val.selected)?.value || "No value selected"
    case DocumentFieldType.StringFieldType:
      return field.value.value || "No value"
    default:
      return "No value"
  }
}

/**
 * generateInitializedOptionSelectValues returns an array of option select objects in the form that current document expects
 * with value being the option label, and a bool attribute of 'selected' which is initialized as false
 *
 * @param optionLabels
 */
const generateInitializedOptionSelectValues = (
  optionLabels: { label: string }[],
) =>
  optionLabels.map(optionLabel => ({
    value: optionLabel.label,
    selected: false,
  }));

/**
 * generateConsolidatedField combines the FieldType and FieldInput into a single object.
 *
 * @param fieldTypes
 * @param fieldInputs
 */
export const generateConsolidatedField = (
  fieldTypes: DriverDocumentTemplateFieldTypeFragment,
  fieldInputs?: DriverDocumentFieldInputFragment,
): DocumentField | undefined => {
  if (fieldTypes.stringFieldType) {
    return {
      type: DocumentFieldType.StringFieldType,
      details: fieldTypes.stringFieldType,
      value: fieldInputs?.stringFieldInput || {
        value: "",
      },
    };
  }

  if (fieldTypes.dateTimeFieldType) {
    return {
      type: DocumentFieldType.DateTimeFieldType,
      details: fieldTypes.dateTimeFieldType,
      value: fieldInputs?.dateTimeFieldInput || {
        dateTimeMs: 0,
      },
    };
  }

  if (fieldTypes.mediaUploadFieldType) {
    return {
      type: DocumentFieldType.MediaUploadFieldType,
      details: fieldTypes.mediaUploadFieldType,
      value: fieldInputs?.mediaUploadFieldInput || { values: [] },
    };
  }

  if (fieldTypes.numberFieldType) {
    return {
      type: DocumentFieldType.NumberFieldType,
      details: fieldTypes.numberFieldType,
      value: fieldInputs?.numberFieldInput || {
        value: 0,
      },
    };
  }

  if (fieldTypes.optionSelectFieldType) {
    return {
      type: DocumentFieldType.OptionSelectFieldType,
      details: fieldTypes.optionSelectFieldType,
      value: fieldInputs?.optionSelectFieldInput || {
        optionValues: generateInitializedOptionSelectValues(
          fieldTypes.optionSelectFieldType.optionLabels,
        ),
      },
    };
  }

  if (fieldTypes.signatureFieldType) {
    return {
      type: DocumentFieldType.SignatureFieldType,
      details: fieldTypes.signatureFieldType,
      value: fieldInputs?.signatureFieldInput || {
        signedAtMs: 0,
        uuid: "",
        name: "",
        signatureBase64: "",
      },
    };
  }
};
