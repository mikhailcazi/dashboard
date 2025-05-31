import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <span className="title">Dashboard</span>
      </div>
      <div className="header-right">
        {/* Add any content you want to display on the right side here */}
      </div>
    </header>
  );
};

export default Header;
