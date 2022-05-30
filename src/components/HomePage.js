import React from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import style from "../styles/HomePage.module.css";

export const HomePage = () => {
  return (
    <div>
      <div className={style.cards}>
        <Card className="col">
          <CardImg
            src="images/seventeen.jpeg"
            alt="Seventeen"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle className={style.title}>We're Seventeen!</CardTitle>
            <CardSubtitle>This is featured photo</CardSubtitle>
          </CardBody>
        </Card>
        <Card className="col">
          <CardBody>
            <CardTitle className={style.title}>Breaking News</CardTitle>
            <CardSubtitle>
              New Released Album! <br />
              listen now in every platform
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
