import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header-main">
        <div className="header-main__nav">
          <NavLink to="/menu">Menu</NavLink>
        </div>
        <div className="header-logo">
          <NavLink to="/">R.V</NavLink>
        </div>
        <div className="header-auth">
          <div>Cart (0)</div>
          <div>
            <div className="header-auth__login">
              <img className="header-auth__login-img" src="/avatar-icon.svg" />
              <div>Log In</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
