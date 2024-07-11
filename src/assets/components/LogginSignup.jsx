import React, {useState} from 'react';
import '..//components/LogginSignup.css'

import user_icon from '../Assetss/user.png'
import Email_icon from '../Assetss/Email.png'
import person_icon  from '../Assetss/password.png'

const LogginSignup = () => {

    const [action,setAction] = useState("Login");

    return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
            <img src={user_icon} alt="" style={{width:"40px"}} />
            <input type="text" placeholder='Name' />
            </div>}
            
            <div className='input'>
            <img src={Email_icon} alt="" style={{width:"40px"}} />
            <input type="Email Id" placeholder='Email' />
            </div>
            <div className='input'>
            <img src={person_icon} alt="" style={{width:"60px"}} />
            <input type="password" placeholder='password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Forgot Password?<span>Click Here!</span></div>}
    <div className='submit-container'>
    <div className={action==='Login'?'submit gray':"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    </div>
)
}

export default LogginSignup