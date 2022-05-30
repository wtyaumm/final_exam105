import React from "react";
import style from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.link}>
        <a href="/">Home</a>
        <a href="/">About Me</a>
        <a href="/">Photo Gallery</a>
      </div>
      <div>
        <address>
          KMUTT, Bangkok,
          <br />
          Thailand
          <br />
          <i class="fa fa-mobile" aria-hidden="true">
            <i> +66 99 999 9999</i>
          </i>
        </address>
      </div>
      <div className={style.contact}>
        <div className={style.icon}>
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
          <p>blabla@gmail.com</p>
        </div>
        <div className={style.icon}>
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <p>Seventeen</p>
        </div>
        <div className={style.icon}>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <p>Seventeen</p>
        </div>
      </div>
    </div>
  );
};
