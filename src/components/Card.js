import React, { useState } from "react";
import { Card, CardBody, CardImg, CardSubtitle } from "reactstrap";
import style from "../styles/PhotoGalleryPage.module.css";

export const PhotoCard = ({ photo, name, description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const onClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={style.cards}>
      <Card className="col">
        <CardImg
          src={photo}
          alt={name}
          width="100%"
          height="100%"
          onClick={onClick}
        />
        {showDescription ? (
          <CardBody>
            <CardSubtitle>{description}</CardSubtitle>
          </CardBody>
        ) : (
          <div></div>
        )}
      </Card>
    </div>
  );
};
