import { Link } from 'react-router-dom';
import netflix_logo from '../../assets/img/Netflix_logo.png'
import './login.scss';

const Login  = () => {
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                <img className='logo' src={netflix_logo} alt="" />
                </div>
            </div>
            <div className="container">
               <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or Phone Number' />
                    <input type="password" placeholder='Password' />
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <Link to="/signup">Sign Up Now</Link> </span>
                    <small>
                    This page is protected by reCAPTCHA to ensure you're not a bot.
                    <Link to="/leaarnmore"></Link>
                    </small>
               </form>
            </div>
        </div>
    );
};

export default Login;