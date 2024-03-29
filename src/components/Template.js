import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1,desc2,formType,image,  setIsLoggedIn}) => {
  return (
  <div className='w-11/12 max-w-[1160px] flex  py-12 justify-between mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-bold text-[1.875rem] leading-[2.375rem] '>
           {title}
        </h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100 '>{desc1}</span>
         
            <span className='text-blue-100 font-semibold italic'>{desc2}</span>

        </p>

        {
            formType==="login" ? (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) : (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>)
        }

        <div className='flex w-full items-center gap-x-2 py-4'>
            <div className='h-[1px] w-full bg-richblack-700 '></div>
            <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
            <div className='h-[1px] w-full bg-richblack-700 '></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 
        px-[12px] py-[8px] gap-x-2 mt-6'>
            <FcGoogle/>
            <p> {formType==="login" ? ("Login with google"):("Signup with google")}</p>
        </button>
    
    </div>

    <div className='relative w-11/12 max-w-[450px] '>
        <img src={frameImage} alt='pattern' width={558} height={504} loading='lazy'></img>
        <img src={image} alt='' width={544} height={490} loading='lazy' className='absolute -top-4 right-4'></img>
    </div>
  </div>
      )
}


export default Template;



