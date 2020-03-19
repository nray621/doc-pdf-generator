# doc-pdf-generator
WIP
- Samsara document PDF Generator
- To compile TS into JS, run the script, and open generated PDF run `npm run-script run`
  - PDF generated will be generated against demo.json
- Once compiled, script can be run against valid json by running `node app.js <path to valid JSON>`
- To compile TS without running js script or opening PDF, run `npm run-script tsc`

The JSON must have the same data structure as the example below

Example JSON in the form we expect:
```
{
  "data": {
    "group": {
      "organization": {
        "name": "Eric S.",
        "driverDocument": {
          "dispatchJob": null,
          "driverCreatedAtMs": 1584125512232,
          "driverId": 1197000,
          "driverName": "Noah",
          "fieldInputs": [
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": {
                "value": 155
              },
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": {
                "value": 0
              },
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": {
                "value": "This is text! Wow!"
              }
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": {
                "value": ""
              }
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": {
                "values": [
                  {
                    "s3PresignedGetUrl": "https://www.researchgate.net/profile/Suleyman_Ozarslan/publication/262991757/figure/fig1/AS:296463486734342@1447693811502/A-sample-receipt-captured-by-mobile-phone-camera.png",
                    "uuid": "f0991a88-cff2-4396-9c75-fe3409f6b1f7"
                  },
                  {
                    "s3PresignedGetUrl": "https://www.researchgate.net/profile/Suleyman_Ozarslan/publication/262991757/figure/fig1/AS:296463486734342@1447693811502/A-sample-receipt-captured-by-mobile-phone-camera.png",
                    "uuid": "9bbee88e-17db-4bfa-852c-6bc105efdbbb"
                  }
                ]
              },
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": {
                "values": []
              },
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": {
                "optionValues": [
                  {
                    "selected": true,
                    "value": "PDFs are cool"
                  },
                  {
                    "selected": false,
                    "value": "PDFs are NOT cool"
                  }
                ]
              },
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": {
                "optionValues": [
                  {
                    "selected": false,
                    "value": "PDFs are cool"
                  },
                  {
                    "selected": false,
                    "value": "PDFs are NOT cool"
                  }
                ]
              },
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": {
                "dateTimeMs": 1584543230506
              },
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": {
                "dateTimeMs": 0
              },
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": null,
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": {
                "name": "Noah",
                "signatureBase64": "some base 64 string",
                "signedAtMs": 1584543241448,
                "uuid": "b7a2320e-defc-45f4-a8ea-b580c77c3bfc"
              },
              "stringFieldInput": null
            },
            {
              "dateTimeFieldInput": null,
              "mediaUploadFieldInput": null,
              "numberFieldInput": null,
              "optionSelectFieldInput": null,
              "signatureFieldInput": {
                "name": "",
                "signatureBase64": "",
                "signedAtMs": 0,
                "uuid": ""
              },
              "stringFieldInput": null
            }
          ],
          "fieldTypes": [
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": {
                "isARequiredField": false,
                "label": "Number",
                "numDecimalPlaces": 0
              },
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": {
                "isARequiredField": false,
                "label": "Number 2",
                "numDecimalPlaces": 0
              },
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": {
                "isARequiredField": false,
                "label": "Text"
              }
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": {
                "isARequiredField": false,
                "label": "Text 2"
              }
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": {
                "isARequiredField": false,
                "label": "Photos"
              },
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": {
                "isARequiredField": false,
                "label": "Photos 2"
              },
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": {
                "isARequiredField": false,
                "label": "Multi Choice",
                "optionLabels": [
                  {
                    "label": "PDFs are cool"
                  },
                  {
                    "label": "PDFs are NOT cool"
                  }
                ]
              },
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": {
                "isARequiredField": false,
                "label": "Multi Choice 2",
                "optionLabels": [
                  {
                    "label": "PDFs are cool"
                  },
                  {
                    "label": "PDFs are NOT cool"
                  }
                ]
              },
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": {
                "isARequiredField": false,
                "label": "Datetime "
              },
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": {
                "isARequiredField": false,
                "label": "Datetime 2"
              },
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": null,
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": {
                "isARequiredField": false,
                "label": "Signature",
                "legalText": "legal text goes here"
              },
              "stringFieldType": null
            },
            {
              "dateTimeFieldType": null,
              "mediaUploadFieldType": null,
              "numberFieldType": null,
              "optionSelectFieldType": null,
              "signatureFieldType": {
                "isARequiredField": false,
                "label": "Signature 2",
                "legalText": "legal text goes here"
              },
              "stringFieldType": null
            }
          ],
          "notes": null,
          "serverCreatedAtMs": 1584543252000,
          "serverUpdatedAtMs": 1584543252000,
          "state": 0,
          "template": {
            "name": "PDF Test",
            "uuidString": "417fad3f-03b8-463a-afc9-91d045fe14ca"
          },
          "vehicle": {
            "id": 212014918354781,
            "name": "Vehicle B"
          }
        }
      }
    }
  }
}
```
