import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Template = ({title, desc1,desc2,formType,image,  setIsLoggedIn}) => {
  return (
  <div>
        <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>

        </p>

        {
            formType==="login" ? (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) : (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>)
        }

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button>{formType==="login" ? ("Login with google"):("Signup with google")}</button>
    
    </div>

    <div>
        <img src={frameImage} alt='pattern' width={558} height={504} loading='lazy'></img>
        <img src={image} alt='' width={544} height={490} loading='lazy'></img>
    </div>
  </div>
      )
}


export default Template;



