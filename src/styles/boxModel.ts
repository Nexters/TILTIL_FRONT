import { css, SerializedStyles } from '@emotion/react';

export const boxModel = (sizePrefix = ''): SerializedStyles => {
  return css`
    .border${sizePrefix} {
      border: 1px solid black !important;
    }
    .border-top${sizePrefix} {
      border-top: 1px solid black !important;
    }
    .border-right${sizePrefix} {
      border-right: 1px solid black !important;
    }
    .border-bottom${sizePrefix} {
      border-bottom: 1px solid black !important;
    }
    .border-left${sizePrefix} {
      border-left: 1px solid black !important;
    }

    .border${sizePrefix}-0 {
      border: 0 !important;
    }
    .border-top${sizePrefix}-0 {
      border-top: 0 !important;
    }
    .border-right${sizePrefix}-0 {
      border-right: 0 !important;
    }
    .border-bottom${sizePrefix}-0 {
      border-bottom: 0 !important;
    }
    .border-left${sizePrefix}-0 {
      border-left: 0 !important;
    }

    .visible${sizePrefix} {
      visibility: visible !important;
    }
    .invisible${sizePrefix} {
      visibility: hidden !important;
    }

    .d${sizePrefix}-flex {
      display: flex !important;
    }
    .d${sizePrefix}-block {
      display: block !important;
    }
    .d${sizePrefix}-inline-block {
      display: inline-block !important;
    }
    .d${sizePrefix}-inline {
      display: inline !important;
    }
    .d${sizePrefix}-none {
      display: none !important;
    }

    .flex${sizePrefix}-row {
      flex-direction: row !important;
    }
    .flex${sizePrefix}-column {
      flex-direction: column !important;
    }
    .flex${sizePrefix}-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex${sizePrefix}-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex${sizePrefix}-wrap {
      flex-wrap: wrap !important;
    }
    .flex${sizePrefix}-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex${sizePrefix}-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex${sizePrefix}-fill {
      flex: 1 1 auto !important;
    }
    .flex-grow${sizePrefix}-0 {
      flex-grow: 0 !important;
    }
    .flex-grow${sizePrefix}-1 {
      flex-grow: 1 !important;
    }
    .flex-shrink${sizePrefix}-0 {
      flex-shrink: 0 !important;
    }
    .flex-shrink${sizePrefix}-1 {
      flex-shrink: 1 !important;
    }

    .justify-content${sizePrefix}-start {
      justify-content: flex-start !important;
    }
    .justify-content${sizePrefix}-end {
      justify-content: flex-end !important;
    }
    .justify-content${sizePrefix}-center {
      justify-content: center !important;
    }
    .justify-content${sizePrefix}-between {
      justify-content: space-between !important;
    }
    .justify-content${sizePrefix}-around {
      justify-content: space-around !important;
    }

    .align-items${sizePrefix}-start {
      align-items: flex-start !important;
    }
    .align-items${sizePrefix}-end {
      align-items: flex-end !important;
    }
    .align-items${sizePrefix}-center {
      align-items: center !important;
    }
    .align-items${sizePrefix}-baseline {
      align-items: baseline !important;
    }
    .align-items${sizePrefix}-stretch {
      align-items: stretch !important;
    }

    .align-content${sizePrefix}-start {
      align-content: flex-start !important;
    }
    .align-content${sizePrefix}-end {
      align-content: flex-end !important;
    }
    .align-content${sizePrefix}-center {
      align-content: center !important;
    }
    .align-content${sizePrefix}-between {
      align-content: space-between !important;
    }
    .align-content${sizePrefix}-around {
      align-content: space-around !important;
    }
    .align-content${sizePrefix}-stretch {
      align-content: stretch !important;
    }

    .align-self${sizePrefix}-auto {
      align-self: auto !important;
    }
    .align-self${sizePrefix}-start {
      align-self: flex-start !important;
    }
    .align-self${sizePrefix}-end {
      align-self: flex-end !important;
    }
    .align-self${sizePrefix}-center {
      align-self: center !important;
    }
    .align-self${sizePrefix}-baseline {
      align-self: baseline !important;
    }
    .align-self${sizePrefix}-stretch {
      align-self: stretch !important;
    }

    .m${sizePrefix}-auto {
      margin: auto !important;
    }
    .m${sizePrefix}-x-auto {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .m${sizePrefix}-left-auto {
      margin-left: auto !important;
    }
    .m${sizePrefix}-right-auto {
      margin-right: auto !important;
    }
    .float${sizePrefix}-right {
      float: right;
    }
    .float${sizePrefix}-left {
      float: left;
    }
    .clear${sizePrefix} {
      clear: both;
    }
    .clear${sizePrefix}-left {
      clear: left;
    }
    .clear${sizePrefix}-right {
      clear: right;
    }

    .w${sizePrefix}-auto {
      width: auto !important;
    }

    .w${sizePrefix}-100 {
      width: 100% !important;
    }

    .m-half {
      margin: 4px;
    }
    .mt-half {
      margin-top: 4px;
    }
    .mb-half {
      margin-bottom: 4px;
    }
    .ml-half {
      margin-left: 4px;
    }
    .mr-half {
      margin-right: 4px;
    }
    .mx-half {
      margin-left: 4px;
      margin-right: 4px;
    }
    .my-half {
      margin-top: 4px;
      margin-bottom: 4px;
    }

    .p-half {
      padding: 4px;
    }
    .pt-half {
      padding-top: 4px;
    }
    .pb-half {
      padding-bottom: 4px;
    }
    .pl-half {
      padding-left: 4px;
    }
    .pr-half {
      padding-right: 4px;
    }
    .px-half {
      padding-left: 4px;
      padding-right: 4px;
    }
    .py-half {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    ${Array(12)
      .fill(1)
      .reduce((previousValue, _, currentIndex) => {
        const index = currentIndex - 1;
        return css`
          ${previousValue}

          .m${sizePrefix}-${index} {
            margin: ${index * 8}px !important;
          }
          .mt${sizePrefix}-${index} {
            margin-top: ${index * 8}px !important;
          }
          .mr${sizePrefix}-${index} {
            margin-right: ${index * 8}px !important;
          }
          .mb${sizePrefix}-${index} {
            margin-bottom: ${index * 8}px !important;
          }
          .ml${sizePrefix}-${index} {
            margin-left: ${index * 8}px !important;
          }
          .mx${sizePrefix}-${index} {
            margin-left: ${index * 8}px !important;
            margin-right: ${index * 8}px !important;
          }
          .my${sizePrefix}-${index} {
            margin-top: ${index * 8}px !important;
            margin-bottom: ${index * 8}px !important;
          }
          .m${sizePrefix}-m-${index} {
            margin: ${index * -8}px !important;
          }
          .mt${sizePrefix}-m-${index} {
            margin-top: ${index * -8}px !important;
          }
          .mr${sizePrefix}-m-${index} {
            margin-right: ${index * -8}px !important;
          }
          .mb${sizePrefix}-m-${index} {
            margin-bottom: ${index * -8}px !important;
          }
          .ml${sizePrefix}-m-${index} {
            margin-left: ${index * -8}px !important;
          }
          .mx${sizePrefix}-m-${index} {
            margin-left: ${index * -8}px !important;
            margin-right: ${index * -8}px !important;
          }
          .my${sizePrefix}-m-${index} {
            margin-top: ${index * -8}px !important;
            margin-bottom: ${index * -8}px !important;
          }

          .p${sizePrefix}-${index} {
            padding: ${index * 8}px !important;
          }
          .pt${sizePrefix}-${index} {
            padding-top: ${index * 8}px !important;
          }
          .pr${sizePrefix}-${index} {
            padding-right: ${index * 8}px !important;
          }
          .pb${sizePrefix}-${index} {
            padding-bottom: ${index * 8}px !important;
          }
          .pl${sizePrefix}-${index} {
            padding-left: ${index * 8}px !important;
          }
          .px${sizePrefix}-${index} {
            padding-left: ${index * 8}px !important;
            padding-right: ${index * 8}px !important;
          }
          .py${sizePrefix}-${index} {
            padding-top: ${index * 8}px !important;
            padding-bottom: ${index * 8}px !important;
          }
          .p${sizePrefix}-m-${index} {
            padding: ${index * -8}px !important;
          }
          .pt${sizePrefix}-m-${index} {
            padding-top: ${index * -8}px !important;
          }
          .pr${sizePrefix}-m-${index} {
            padding-right: ${index * -8}px !important;
          }
          .pb${sizePrefix}-m-${index} {
            padding-bottom: ${index * -8}px !important;
          }
          .pl${sizePrefix}-m-${index} {
            padding-left: ${index * -8}px !important;
          }
          .px${sizePrefix}-m-${index} {
            padding-left: ${index * -8}px !important;
            padding-right: ${index * -8}px !important;
          }
          .py${sizePrefix}-m-${index} {
            padding-top: ${index * -8}px !important;
            padding-bottom: ${index * -8}px !important;
          }
        `;
      }, '')}
  `;
};
