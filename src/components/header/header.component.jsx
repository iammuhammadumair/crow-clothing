import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon.componet";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, hidden }) => {
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
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link to="/signin" className="option">
                        Sign In
                    </Link>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser: currentUser,
    hidden: hidden,
});
export default connect(mapStateToProps)(Header);
