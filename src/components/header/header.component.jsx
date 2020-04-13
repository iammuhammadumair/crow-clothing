import React from "react";

import { auth } from '../../firebase/firebase.utils';

import { Link } from "react-router-dom";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
            :
            <Link to="/signin" className="option">Sign In</Link>
        }
      </div>
    </div>
  );
};
export default Header;