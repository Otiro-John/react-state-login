import { useState } from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {
    const [field,setField] = useState('Login');

    const handleChnage = () =>{
        if(field == "Login"){
            setField("Sign Up");
        }
        else{
            setField("Login");
        }
    }
    const handleSubmition = () =>{
      alert(`Thanks for your ${field}`);
    }
  return (
    <div className='login-form'>
    <div className="title">{field}</div>
    <div className="input-fields">
        <form>
{field == "Login"? <><input type="email" placeholder='E-Mail' required/><input type="password" placeholder='Password' required/></>:<><input type="text" placeholder='Full-Name' required/><input type="email" placeholder='E-Mail' required/><input type="password" placeholder='Password' required/></>}
<button className='btn' type='submit' onClick={handleSubmition}>{field}</button>
   {field == "Login"?<button className='btn' type='submit' onClick={handleChnage}>Sign-Up</button>:<button className='btn' type='submit' onClick={handleChnage}>Login</button>}

    </form>
    </div>
    </div>
  )
}

export default LoginSignUp