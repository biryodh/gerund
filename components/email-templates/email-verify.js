import * as React from 'react';
import { Button } from '@react-email/button';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
//import { Text } from '@react-email/text';

export function VerifyAccount(props) {
  return (
    <Html lang="en">
      <p>Verify Account</p>
      <Hr />
      <Button href={`http://localhost:3000/verify-account?s=${props.token}`}>Click me</Button>
    </Html>
  );
}

export default VerifyAccount;
