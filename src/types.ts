export enum DocumentFieldType {
  StringFieldType = "stringFieldType",
  DateTimeFieldType = "dateTimeFieldType",
  MediaUploadFieldType = "mediaUploadFieldType",
  NumberFieldType = "numberFieldType",
  OptionSelectFieldType = "optionSelectFieldType",
  SignatureFieldType = "signatureFieldType",
  NotesFieldType = "notesFieldType",
}

export interface DocumentMediaUploadField {
  details: DriverDocumentTemplateMediaUploadFieldTypeFragment;
  value: DriverDocumentMediaUploadFieldInputFragment;
  type: DocumentFieldType.MediaUploadFieldType;
}

export interface DocumentStringField {
  details: DriverDocumentTemplateStringFieldTypeFragment;
  value: DriverDocumentStringFieldInputFragment;
  type: DocumentFieldType.StringFieldType;
}

export interface DocumentNotesField {
  details: DriverDocumentTemplateStringFieldTypeFragment;
  value: DriverDocumentStringFieldInputFragment;
  type: DocumentFieldType.NotesFieldType;
}

export interface DocumentNumberField {
  details: DriverDocumentTemplateNumberFieldTypeFragment;
  value: DriverDocumentNumberFieldInputFragment;
  type: DocumentFieldType.NumberFieldType;
}

export interface DocumentOptionField {
  details: DriverDocumentTemplateOptionSelectFieldTypeFragment;
  value: DriverDocumentOptionSelectFieldInputFragment;
  type: DocumentFieldType.OptionSelectFieldType;
}

export interface DocumentSignatureField {
  details: DriverDocumentTemplateSignatureFieldTypeFragment;
  value: DriverDocumentSignatureFieldInputFragment;
  type: DocumentFieldType.SignatureFieldType;
}

export interface DocumentDateTimeField {
  details: DriverDocumentTemplateDateTimeFieldTypeFragment;
  value: DriverDocumentDateTimeFieldInputFragment;
  type: DocumentFieldType.DateTimeFieldType;
}

export type DocumentField =
  | DocumentMediaUploadField
  | DocumentStringField
  | DocumentNumberField
  | DocumentOptionField
  | DocumentSignatureField
  | DocumentDateTimeField
  | DocumentNotesField;

export type DriverDocumentQuery = {
  group:  {
    organization:  {
      id: number,
      name: string | null,
      driverDocument:  {
        driverName: string,
        driverCreatedAtMs: number,
        driverId: number,
        notes: string | null,
        serverCreatedAtMs: number,
        serverUpdatedAtMs: number,
        fieldInputs:  {
          mediaUploadFieldInput:  {
            values:  {
              uuid: string,
              s3PresignedGetUrl: string,
            }[],
          } | null,
          stringFieldInput:  {
            value: string,
          } | null,
          numberFieldInput:  {
            value: number,
          } | null,
          optionSelectFieldInput:  {
            optionValues:  {
              value: string,
              selected: boolean,
            }[],
          } | null,
          signatureFieldInput:  {
            name: string,
            uuid: string,
            signedAtMs: number,
            signatureBase64: string,
          } | null,
          dateTimeFieldInput:  {
            dateTimeMs: number,
          } | null,
        }[],
        fieldTypes:  {
          mediaUploadFieldType:  {
            label: string,
            isARequiredField: boolean,
          } | null,
          stringFieldType:  {
            label: string,
            isARequiredField: boolean,
          } | null,
          numberFieldType:  {
            label: string,
            numDecimalPlaces: number,
            isARequiredField: boolean,
          } | null,
          optionSelectFieldType:  {
            label: string,
            isARequiredField: boolean,
            optionLabels:  {
              label: string,
            }[],
          } | null,
          signatureFieldType:  {
            label: string,
            legalText: string,
            isARequiredField: boolean,
          } | null,
          dateTimeFieldType:  {
            label: string,
            isARequiredField: boolean,
          } | null,
        }[],
        template:  {
          name: string,
          uuidString: string,
        } | null,
        dispatchJob:  {
          id: number,
          destinationName: string,
          destinationAddress: string,
          dispatchRouteId: number,
        } | null,
        vehicle:  {
          id: number,
          name: string,
        } | null,
        state: number,
      } | null,
    },
  } | null,
}

export type DriverDocumentForOrgFragment = {
  driverName: string,
  driverCreatedAtMs: number,
  driverId: number,
  notes: string | null,
  serverCreatedAtMs: number,
  serverUpdatedAtMs: number,
  fieldInputs:  {
    mediaUploadFieldInput:  {
      values:  {
        uuid: string,
        s3PresignedGetUrl: string,
      }[],
    } | null,
    stringFieldInput:  {
      value: string,
    } | null,
    numberFieldInput:  {
      value: number,
    } | null,
    optionSelectFieldInput:  {
      optionValues:  {
        value: string,
        selected: boolean,
      }[],
    } | null,
    signatureFieldInput:  {
      name: string,
      uuid: string,
      signedAtMs: number,
      signatureBase64: string,
    } | null,
    dateTimeFieldInput:  {
      dateTimeMs: number,
    } | null,
  }[],
  fieldTypes:  {
    mediaUploadFieldType:  {
      label: string,
      isARequiredField: boolean,
    } | null,
    stringFieldType:  {
      label: string,
      isARequiredField: boolean,
    } | null,
    numberFieldType:  {
      label: string,
      numDecimalPlaces: number,
      isARequiredField: boolean,
    } | null,
    optionSelectFieldType:  {
      label: string,
      isARequiredField: boolean,
      optionLabels:  {
        label: string,
      }[],
    } | null,
    signatureFieldType:  {
      label: string,
      legalText: string,
      isARequiredField: boolean,
    } | null,
    dateTimeFieldType:  {
      label: string,
      isARequiredField: boolean,
    } | null,
  }[],
  template:  {
    name: string,
    uuidString: string,
  } | null,
  dispatchJob:  {
    id: number,
    destinationName: string,
    destinationAddress: string,
    dispatchRouteId: number,
  } | null,
  vehicle:  {
    id: number,
    name: string,
  } | null,
  state: number,
}

export type DriverDocumentFieldInputFragment = {
  mediaUploadFieldInput:  {
    values:  {
      uuid: string,
      s3PresignedGetUrl: string,
    }[],
  } | null,
  stringFieldInput:  {
    value: string,
  } | null,
  numberFieldInput:  {
    value: number,
  } | null,
  optionSelectFieldInput:  {
    optionValues:  {
      value: string,
      selected: boolean,
    }[],
  } | null,
  signatureFieldInput:  {
    name: string,
    uuid: string,
    signedAtMs: number,
    signatureBase64: string,
  } | null,
  dateTimeFieldInput:  {
    dateTimeMs: number,
  } | null,
}

export type DriverDocumentMediaUploadFieldInputFragment = {
  values:  {
    uuid: string,
    s3PresignedGetUrl: string,
  }[],
}

export type MediaUploadFragment = {
  uuid: string,
  s3PresignedGetUrl: string,
}

export type DriverDocumentStringFieldInputFragment = {
  value: string,
}

export type DriverDocumentNumberFieldInputFragment = {
  value: number,
}

export type DriverDocumentOptionSelectFieldInputFragment = {
  optionValues:  {
    value: string,
    selected: boolean,
  }[],
}

export type OptionValueFragment = {
  value: string,
  selected: boolean,
}

export type DriverDocumentSignatureFieldInputFragment = {
  name: string,
  uuid: string,
  signedAtMs: number,
  signatureBase64: string,
}

export type DriverDocumentDateTimeFieldInputFragment = {
  dateTimeMs: number,
}

export type DriverDocumentTemplateFieldTypeFragment = {
  mediaUploadFieldType:  {
    label: string,
    isARequiredField: boolean,
  } | null,
  stringFieldType:  {
    label: string,
    isARequiredField: boolean,
  } | null,
  numberFieldType:  {
    label: string,
    numDecimalPlaces: number,
    isARequiredField: boolean,
  } | null,
  optionSelectFieldType:  {
    label: string,
    isARequiredField: boolean,
    optionLabels:  {
      label: string,
    }[],
  } | null,
  signatureFieldType:  {
    label: string,
    legalText: string,
    isARequiredField: boolean,
  } | null,
  dateTimeFieldType:  {
    label: string,
    isARequiredField: boolean,
  } | null,
}

export type DriverDocumentTemplateMediaUploadFieldTypeFragment = {
  label: string,
  isARequiredField: boolean,
}

export type DriverDocumentTemplateStringFieldTypeFragment = {
  label: string,
  isARequiredField: boolean,
}

export type DriverDocumentTemplateNumberFieldTypeFragment = {
  label: string,
  numDecimalPlaces: number,
  isARequiredField: boolean,
}

export type DriverDocumentTemplateOptionSelectFieldTypeFragment = {
  label: string,
  isARequiredField: boolean,
  optionLabels:  {
    label: string,
  }[],
}

export type OptionLabelFragment = {
  label: string,
}

export type DriverDocumentTemplateSignatureFieldTypeFragment = {
  label: string,
  legalText: string,
  isARequiredField: boolean,
}

export type DriverDocumentTemplateDateTimeFieldTypeFragment = {
  label: string,
  isARequiredField: boolean,
}
