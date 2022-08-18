import { useRef } from 'react';
import { useState } from 'react';
import netflix_logo from '../../assets/img/Netflix_logo.png';
import './register.scss';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const handelStart = () =>{
        setEmail(emailRef.current.value);
    };
    const handelFinish = () =>{
        setPassword(passwordRef.current.value);
    };
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                <img className='logo' src={netflix_logo} alt="" />
                <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch ? Enter your email to create or register your membership</p>
                {!email ? (
                <div className="input">
                    <input type="email" placeholder='email address' ref={emailRef} />
                    <button onClick={handelStart} className="registerButton">Get Started</button>
                </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder='pssword' ref={passwordRef} />
                        <button onClick={handelFinish} className="registerButton">Start</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;