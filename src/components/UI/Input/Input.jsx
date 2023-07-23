import React from 'react'
import { Form } from 'react-bootstrap';

export const Input = ({label, type, placeholder, errorMessage, value, onChange, name}) => {
  return (
    <>
       <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            />
            <Form.Text className="text-muted">{errorMessage}</Form.Text>
        </Form.Group>
    </>
  );
}
