import React, { useState, useEffect } from "react";
import "../Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } 
      else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll")
    // }
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
        alt="Netflix Logo"
        className="nav_logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
