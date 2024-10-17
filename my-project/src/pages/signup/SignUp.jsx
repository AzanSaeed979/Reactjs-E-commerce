import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpCode from '../../component/signupcode/SignUpCode';


const buttonStyling = {
  backgroundColor: 'black',
  color: 'white',
  padding: '6px',
  marginTop: '-5px',
  borderRadius: '3px'
}
const SignUp = () => {
  const navigate = useNavigate();

  return  <>
   <button style={buttonStyling} onClick={() => navigate('/SignUpCode')}>SignUp</button>
  </>
  
}

export default SignUp