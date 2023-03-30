import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header-main">
        <nav className="header-main__nav">Menu</nav>
        <div className="header-logo">R.V</div>
        <div className="header-auth">
          <div>Cart (0)</div>
          <div>
            <div className="header-auth__login">
              <img className="header-auth__login-img" src="/avatar-icon.svg" />
              <div>Log In</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
