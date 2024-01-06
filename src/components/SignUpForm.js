import React, { useState } from 'react'
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const SignUpForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [showPassword,setShowPassword] = useState(false);
  function changeHandler(event){
    setFormData((prev)=>
    (
      {...prev,
       [event.target.name]: event.target.value 
      }
    )

    )
  }

  
  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("Password do not match");
        return;
    }
    else{
        setIsLoggedIn(true);
        toast.success("Account created");
        navigate("/dashboard");
  }
}
  return (
    <div>
         {/* student-instructor tab */}
         <div>
            <button>
              Student
            </button>
            <button>
              Instructor
            </button>
         </div>

         <form onSubmit={submitHandler}>
          {/* first name && last name */}
              <div>     
                <label >
                  <p>First Name<sup>*</sup></p>
                  <input
                    required
                    type='text'
                    name='firstName'
                    onChange={changeHandler}
                    placeholder='Enter your First Name'
                    value = {formData.firstName}
                  >
                  </input>
                </label>
                <label >
                  <p>Last Name<sup>*</sup></p>
                  <input
                    required
                    type='text'
                    name='lastName'
                    onChange={changeHandler}
                    placeholder='Enter your Last Name'
                    value = {formData.lastName}
                  >
                  </input>
                </label>
              </div>    
          
          {/* email */}
          <label >
              <p>Email Address<sup>*</sup></p>
              <input
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter your email'
                value = {formData.email}
              >
              </input>
            </label>

            { /*create password and confirm password  */}
          <div>
          <label >
              <p>Create Password<sup>*</sup></p>
              <input
                required
                type={showPassword ? ("text"): ("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter your password'
                value = {formData.password}
              >
              </input>
              <span onClick={()=> setShowPassword((prev) => !prev)}>
                {
                    showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                }
              </span>
            </label>
            <label >
               <p>Last Name<sup>*</sup></p>
                <input
                  required
                  type={showPassword ? ("text") : ("password")}
                  name='confirmPassword'
                  onChange={changeHandler}
                  placeholder='Confirm your password'
                  value = {formData.confirmPassword}>
                </input>
                <span onClick={()=> setShowPassword((prev) => !prev)}>
                  {
                      showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                  }
                </span>
            </label>
          </div>
          
          <button>
            Create Account
          </button>
         </form>
    </div>
  )
}

export default SignUpForm