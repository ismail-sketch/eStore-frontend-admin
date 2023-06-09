import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

import { Layout } from '../../components/Layout/Layout'
import { Input } from '../../components/UI/Input/Input';

export const Signin = () => {
  return (
    <>
     <Layout>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: '6', offset: '3' }}>
            <Form>
             <Input
                label='Email'
                placeholder='Введите email'
                value=""
                type='email'
                onChange={() => {}}
             />

            <Input
                label='Пароль'
                placeholder='Введите пароль'
                value=""
                type='password'
                onChange={() => {}}
            />
              <Button variant="primary" type="submit">
                Войти
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout>
    </>
  );
}
