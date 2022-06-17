import React, { useState } from "react";
import darkImg from "../../images/icon-sun.svg";
import lightImg from "../../images/icon-moon.svg";

function Header() {
  const [btnImg, setBtnImg] = useState(darkImg);

  /**
   * Function that toggles theme of the applications
   * between dark and light, and image inside button
   * that toggles themes
   */
  function handleClick() {
    const body = document.querySelector("body") as HTMLElement;

    if (btnImg === darkImg) {
      setBtnImg(lightImg);
      body.classList.remove("dark");
      body.classList.add("light");
    } else {
      setBtnImg(darkImg);
      body.classList.remove("light");
      body.classList.add("dark");
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">Todo</h1>
      <button
        onClick={handleClick}
        aria-label="change theme"
        className="header__btn"
      >
        <img src={btnImg} alt="theme icon" />
      </button>
    </header>
  );
}

export default Header;
