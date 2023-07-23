import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/regAuth/regAuthSlice';
import { isUserLoggedIn } from '../../redux/regAuth/regAuthSlice';

import { Layout } from '../../components/Layout/Layout'
import { Input } from '../../components/UI/Input/Input';


export const Signin = () => {

  const [inputValue, setInputValue] = React.useState({
    email: '',
    password: ''
  })

  // const [error, setError] = React.useState('')


  const handleChange = (e) => {
    const value = e.target.value
    setInputValue({...inputValue, [e.target.name]: value})
  }

  // dispatch и данные из state--------
  const dispatch = useDispatch()
  // const user = useSelector(state => {
  //   console.log(state.regSlice.user)
  //   return state.regSlice.user
  // })
  const token = useSelector(state => state.regSlice.token)
  const auth = useSelector(state => state.regSlice.authenticate)


// ----------------------------------------

  React.useEffect(() => {
      dispatch(isUserLoggedIn())
  }, [auth, dispatch])


if(auth) {
  return <Navigate to='/'/>
}

  return (
    <>
     <Layout>

      <div>{`Bearer ${token}`}</div>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: '6', offset: '3' }}>
            <Form onSubmit={(e) => {
                e.preventDefault()
                dispatch(login({email: inputValue.email, password: inputValue.password}))
              }
              }>
             <Input
                label='Email'
                placeholder='Введите email'
                value={inputValue.email}
                type='email'
                name="email"
                onChange={handleChange}
             />

            <Input
                label='Пароль'
                placeholder='Введите пароль'
                value={inputValue.password}
                type='password'
                name="password"
                onChange={handleChange}
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
