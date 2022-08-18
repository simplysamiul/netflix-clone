import netflix_logo from '../../assets/img/Netflix_logo.png';
import { Link } from "react-router-dom"
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons';
import profile_logo from '../../assets/img/profile.jpeg';
import { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={netflix_logo} alt="" />
                    <Link to="/">HomePgae</Link>
                    <Link to="/series">Series</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/">New and Popular</Link>
                    <Link to="/">My List</Link>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <Link to="/">KID</Link>
                    <Notifications className='icon' />
                    <img src={profile_logo} alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <Link to="/">Settings</Link>
                            <Link to="/">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;