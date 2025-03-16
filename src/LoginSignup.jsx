import React, { useState } from "react";


const LoginSignup = () => {

    const [action,setAction] = useState("Login");

    return(
        <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
            <img src="/public/user_icon.png" alt="" />
            <input type="user" placeholder="User" />
           </div>}
         
           <div className="input">
            <img src="/public/email_icon.png" alt="" />
            <input type="email" placeholder="Email" />
           </div>
           <div className="input">
            <img src="/public/password_icon.png" alt="" />
            <input type="password" placeholder="Password"/>
           </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Забравена парола? <span>Натисни тук!</span></div>}
        <div className="submit-container">
           <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Регистрирай се</div>
           <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Вход</div>
        </div>
       </div>

    );
    
};

export default LoginSignup