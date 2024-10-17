import React from 'react'
import { useNavigate } from 'react-router-dom'

const buttonStyling = {
  backgroundColor: 'black',
  color: 'white',
  padding: '6px',
  marginTop: '-5px',
  borderRadius: '3px'
}
const Login = () => {
  const navigate = useNavigate();
  return (
   <button style={buttonStyling} onClick={() => navigate('/LoginCode')}>Login</button>
  )
}

export default Login