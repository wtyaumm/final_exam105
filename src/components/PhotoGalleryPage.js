import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import style from "../styles/PhotoGalleryPage.module.css";
import { Data } from "../share/PhotoData";
import { PhotoCard } from "./Card";

export const PhotoGalleryPage = () => {
  const [pic, setPic] = useState(Data);

  return (
    <div className={style.all}>
      <Row>
        {pic.map((p) => (
          <Col>
            <PhotoCard
              photo={p.photo}
              name={p.name}
              description={p.description}
              like={p.like}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
