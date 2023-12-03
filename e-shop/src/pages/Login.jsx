import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { loginImg } from '../assets';
import { useNavigate } from 'react-router-dom';

function Login() {

    const {user, setUser} = useContext(UserContext);
    const navigation = useNavigate()
  return (
    <section className="login">
        <div className="content">
            <div className="login-img">
                <img src={loginImg} alt="" />
            </div>
            <div className="login-form">
                <form action="">
                    <input type="email" name="email" id="email" placeholder='Enter you email'/>
                    <input type="password" name="password" id="password" placeholder='Enter you password'/>
                </form>
                <button type="submit" onClick={()=>{
                    setUser(true);
                    navigation(-1);
                }}>Login</button>
            </div>
        </div>
    </section>
  )
}

export default Login