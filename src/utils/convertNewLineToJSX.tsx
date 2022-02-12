import * as React from 'react';

export default function convertNewLineToJSX(str: string) {
  return str.split('\n').map((line, index) => (
    <React.Fragment key={line}>
      {index > 0 ? <br /> : ''}
      {line}
    </React.Fragment>
  ));
}
