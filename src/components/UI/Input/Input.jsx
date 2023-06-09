import React from 'react'
import { Form } from 'react-bootstrap';

export const Input = ({label, type, placeholder, errorMessage, value, onChange}) => {
  return (
    <>
       <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
            <Form.Text className="text-muted">{errorMessage}</Form.Text>
        </Form.Group>
    </>
  );
}
