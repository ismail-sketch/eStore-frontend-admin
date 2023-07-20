import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/regAuth/regAuthSlice';

import { Layout } from '../../components/Layout/Layout'
import { Input } from '../../components/UI/Input/Input';

export const Signin = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.regSlice.log)
  return (
    <>
     <Layout>
      <div>{`Bearer ${auth.token}`}</div>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: '6', offset: '3' }}>
            <Form onSubmit={(e) => {
                e.preventDefault()
                dispatch(login({email: 'gennadiy.stahanov@mail.ru', password: '12345'}))
              }
              }>
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
