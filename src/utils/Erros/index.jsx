import React from 'react';
import { ErrorMessage } from '@hookform/error-message';


export default function ErrorContainer({errors}) {
  return (
    <ErrorMessage
    errors={errors}
    name="singleErrorInput"
    render={({ message }) => <p>{message}</p>}
  />
  )
}
