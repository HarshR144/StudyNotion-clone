import React, { useState } from 'react'

const LoginForm = () => {
    const [formData,setFormData] = useState({email:"", password:""})
    const [showPassword,setShowPasseord] =useState(false)
    
    function changeHandler(event){
        
        setFormData((prev)=>(
            {...prev,
                [event.target.name]: event.target.value 

            }
        ))
    }
    
    return (
    <form>
        <label> 
            <p>Email Address <sup>*</sup> </p>
            <input
            required 
            type='text'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'/>
        </label>
        

        <label> 
            <p>Password <sup>*</sup> </p>
            <input
            required 
            type= {showPassword ? ('text') : ('password')}
            onChange={changeHandler}
            placeholder='Enter password'
            value={formData.password}
            />

        </label>
        
        
    </form>
  )
}

export default LoginForm