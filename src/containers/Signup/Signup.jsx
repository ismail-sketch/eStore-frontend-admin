import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { Input } from '../../components/UI/Input/Input'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Signup = () => {
  const auth = useSelector(state => state.regSlice.authenticate)


  if(auth) {
    return <Navigate to='/'/>
  }

  return (
    <>
      <Layout>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: '6', offset: '3' }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="Имя"
                    placeholder="Введите имя"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Фамилия"
                    placeholder="Введите фамилию"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Введите email"
                value=""
                type="email"
                onChange={() => {}}
                errorMessage={'Мы никому не передадим ваш email'}
              />
               <Input
                label="Пароль"
                placeholder="Введите пароль"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Регистрация
              </Button>
            </Form>
          </Col>
        </Row>
      </Layout>
    </>
  );
}
