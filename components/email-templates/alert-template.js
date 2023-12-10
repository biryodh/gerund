import * as React from 'react';
import { Button } from '@react-email/button';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
//import { Text } from '@react-email/text';

export function AlertTemplate(props) {
  return (
    <Html lang="en">
      <p>Alert Message</p>
      <Hr />
      {props.message}
      <br></br>
      Address: {props.location}
    </Html>
  );
}

export default AlertTemplate;
