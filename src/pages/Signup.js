import React from 'react';
import  Template  from '../components/Template';
import signupImage from '../assets/signup.png';
const Signup = (props) => {
  return (

        <Template 
          title="Join the millions learning to code with StudyNotion for free"
          desc1="Build skills for today, tomorrow, and beyond."
          desc2="Education to future-proof your career."
          image={signupImage}
          formType="signup"
          setIsLoggedIn={props.setIsLoggedIn}
        
         />
  )
}

export default Signup