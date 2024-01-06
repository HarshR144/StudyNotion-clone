import React, { useState } from 'react';
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData] = useState({email:"", password:""})
    const [showPassword,setShowPassword] =useState(false)
    const navigate = useNavigate();

    function changeHandler(event){
        
        setFormData((prev)=>(
            {...prev,
                [event.target.name]: event.target.value 

            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
    <form onSubmit={submitHandler}>
        <label> 
            <p>Email Address <sup>*</sup> </p>
            <input
            required 
            name='email'
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'/>
        </label>
        

        <label> 
            <p>Password <sup>*</sup> </p>
            <input
            required 
            name="password"
            type= {showPassword ? ('text') : ('password')}
            onChange={changeHandler}
            placeholder='Enter password'
            value={formData.password}
            />
            <span onClick={()=> setShowPassword((prev) => !prev)}>
                {
                    showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                }
            </span>
        </label>
        
        <Link to="#">
            <p>Forgot password</p>
        </Link>
        
        <button>Log In</button>
    </form>
  )
}

export default LoginForm