import React, { useState } from 'react'
import { AiOutlineEye ,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const SignUpForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
    
  })
  const [accountType,setAccountType] = useState("student"); 

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
    <div  className='flex flex-col '>
         {/* student-instructor tab */}
         <div className='flex  bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType=== "student" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`} 
            onClick={()=> setAccountType("student")} >
              Student
            </button>
            <button className={`${accountType=== "instructor" ? "bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`} 
            onClick={()=> setAccountType("instructor")}>
              Instructor
            </button>
         </div>

         <form onSubmit={submitHandler}  className='flex flex-col w-full gap-y-4 mt-6'>
          {/* first name && last name */}
              <div className='flex  gap-x-4'>     
                <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-0'>First Name<sup className='text-pink-200 '> *</sup> 
                  </p>
                  <input
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] border-b-richblack-700 border-b-2'
                    required
                    type='text'
                    name='firstName'
                    onChange={changeHandler}
                    placeholder='Enter your First Name'
                    value = {formData.firstName}
                  >
                  </input>
                </label>
                <label className='w-full' >
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-0'>Last Name<sup className='text-pink-200 '> *</sup> 
                  </p>
                  <input
                  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] border-b-richblack-700 border-b-2'
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
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200 '> *</sup> 
              </p>
              <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] border-b-richblack-700 border-b-2'
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
          <div className='flex  gap-x-4'>
          <label className='relative w-full' >
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-0'>Create Password<sup className='text-pink-200 '> *</sup> 
               </p>
              <input
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] border-b-richblack-700 border-b-2'
                required
                type={showPassword ? ("text"): ("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter your password'
                value = {formData.password}
              >
              </input>
              <span onClick={()=> setShowPassword((prev) => !prev)}
               className='absolute right-3 top-[38px] cursor-pointer'>
                {
                    showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                }
              </span>
            </label>
            <label className='relative w-full'>
               <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-0'> Confirm Password<sup className='text-pink-200 '> *</sup> 
                </p>
                <input
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full  p-[12px] border-b-richblack-700 border-b-2'
                  required
                  type={showConfirmPassword ? ("text") : ("password")}
                  name='confirmPassword'
                  onChange={changeHandler}
                  placeholder='Confirm your password'
                  value = {formData.confirmPassword}>
                </input>
                <span onClick={()=> setShowConfirmPassword((prev) => !prev)}
                   className='absolute right-3 top-[38px] cursor-pointer'
                >
                  {
                      showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                  }
                </span>
            </label>
          </div>
          
          <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
          </button>
         </form>
    </div>
  )
}

export default SignUpForm