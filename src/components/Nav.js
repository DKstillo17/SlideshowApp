import React from 'react';
import Logo from '../img/icon.png';


function Nav(){
    return(
        <div>
            <nav className="navbar navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
                        SlideshowApp
                    </a>
                </div>
            </nav>
        </div>
        
    );
}

export default Nav;