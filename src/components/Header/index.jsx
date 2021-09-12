import React from "react";
import { Link } from "react-router-dom";

const Header = ({User}) =>  {
   return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <div className="logo">
                 <Link to="/">
                    <h4>Omega Team</h4>
                </Link>
            </div>
    
            <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item">
                       <Link to="/" className="nav-link">Home</Link>
                    </li>
    
                    <li className="nav-item">
                       <Link to="/blog" className="nav-link">Blog</Link>
                    </li>
                    {User && 
                        <li className="nav-item">
                           <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                    }
                    {!User && 
                        <li className="nav-item">
                           <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    }
                    {!User && 
                        <li className="nav-item">
                           <Link to="/register" className="nav-link">Register</Link>
                        </li> 
                    }
                    <li className="nav-item">
                       <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>

          {/*  <div className="navbar-right ml-auto">
    
                <div className="search-icon">
                    <i className="icon_search"></i>
                </div>
    
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>*/}
        </div>
    </nav>
   );
}

export default Header;