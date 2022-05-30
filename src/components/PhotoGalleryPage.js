import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import style from "../styles/PhotoGalleryPage.module.css";
import PhotoCard from "./Card";
import { connect } from "react-redux";

const PhotoGalleryPage = ({ photos }) => {
  return (
    <div className={style.all}>
      <Row>
        {photos.map((p) => (
          <Col>
            <PhotoCard
              id={p.id}
              photo={p.photo}
              name={p.name}
              description={p.description}
              like={p.like}
              comments={p.comments}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    photos: state.photo,
  };
};

export default connect(mapStateToProps)(PhotoGalleryPage);
