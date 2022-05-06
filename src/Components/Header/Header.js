import React from 'react';
import './Header.css';
import image from '../../Images/shop.png';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSognOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light head-color sticky-top">
                <div class="container-fluid">
                    <div class="navbar-brand" href="#">
                        <img src={image} alt="" width="50" height="34" />
                    </div>
                    <nav class="navbar-brand text-white" >Shopping-zone</nav>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink className="nav-link active text-white" aria-current="page" to="/home" >Home</NavLink>
                            <NavLink className="nav-link text-white" to="/product" >Products</NavLink>
                            <nav className="nav-link text-white" >Blog</nav>
                            {
                                user ?
                                    <NavLink onClick={handleSognOut} className="nav-link text-white" to="/login" >Sign Out</NavLink>
                                    :
                                    <NavLink className="nav-link text-white" to="/login" >LogIn</NavLink>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;