import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  const token = useSelector(state => state.regSlice.token)
  return token ? <Outlet/> : <Navigate to='/signin'/>
}

export default PrivateRoute

