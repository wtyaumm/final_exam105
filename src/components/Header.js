import React from "react";
import style from "../styles/Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className={style.navbar}>
        <a href="/" className={style.brand}>
          Seventeen
        </a>
        <Link to={"/"} className={style.link}>
          <span>Home</span>
        </Link>
        <Link to={"./AboutMe"} className={style.link}>
          <span>About Me</span>
        </Link>
        <Link to={"/PhotoGallery"} className={style.link}>
          <span>Photo Gallery</span>
        </Link>
      </div>
      <div className={style.jumbotron}>
        <span>
          <b>Hello, we are Seventeen!</b>
        </span>
        <p>This is the website that will let you know the news of Seventeen</p>
      </div>
    </div>
  );
};
