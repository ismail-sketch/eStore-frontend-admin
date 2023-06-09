import React from 'react'
import {Layout} from '../../components/Layout/Layout'
import './Home.scss'

export const Home = () => {
  return (
    <>
        <Layout>
            <div className='jumbotron home'>
                <h1 className='text-center'>Добро пожаловать, админ!</h1>
            </div>
        </Layout>
    </>
  )
}
