import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  CardImgOverlay,
} from "reactstrap";
import style from "../styles/PhotoGalleryPage.module.css";

const PhotoCard = ({
  id,
  photo,
  name,
  description,
  like,
  handleComment,
  handleLike,
  handleDisLike,
  comments,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const onClick = () => {
    setShowDescription(!showDescription);
    setModalOpen(true);
  };
  const [isLike, setLike] = useState(false);
  const addLike = () => {
    setLike(true);
    handleLike(id);
  };
  const dislike = () => {
    setLike(false);
    handleDisLike(id);
  };
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const addComment = () => {
    if (username != "" && comment != "") {
      handleComment(username, comment, rate, id);
      setComment("");
      setUsername("");
      setRate(0);
    }
  };

  return (
    <>
      <Modal centered isOpen={modalOpen}>
        <CardImg src={photo} alt={name} width="90%" height="90%" />
        <CardImgOverlay className={style.quit}>
          <i
            class="fa fa-times"
            aria-hidden="true"
            onClick={() => setModalOpen(false)}
          ></i>
        </CardImgOverlay>
        <ModalBody>
          {isLike ? (
            <i
              className="fa fa-heart text-danger"
              aria-hidden="true"
              onClick={dislike}
            ></i>
          ) : (
            <i
              className="fa fa-heart-o"
              aria-hidden="true"
              onClick={addLike}
            ></i>
          )}
          <span>
            {" "}
            {like} {like > 1 ? "likes" : "like"}{" "}
          </span>
        </ModalBody>
      </Modal>
      <div className={style.cards}>
        <Card className="col">
          <CardImg
            src={photo}
            alt={name}
            width="100%"
            height="100%"
            onClick={onClick}
          />
          <CardBody>
            {isLike ? (
              <i
                className="fa fa-heart text-danger"
                aria-hidden="true"
                onClick={dislike}
              ></i>
            ) : (
              <i
                className="fa fa-heart-o"
                aria-hidden="true"
                onClick={addLike}
              ></i>
            )}
            <span>
              {" "}
              {like} {like > 1 ? "likes" : "like"}{" "}
            </span>
            <br />
            <div>
              {comments.map((comment) => (
                <>
                  <div>
                    <b>{comment.username}</b> {comment.comment} {"("}
                    {comment.rate}
                    {")"}
                  </div>
                </>
              ))}
            </div>
            <Label className={style.label}>Username :</Label>
            <Input
              type="text"
              className={style.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              invalid={username == ""}
              valid={username != ""}
            />
            <Label className={style.label}>Comment :</Label>
            <Input
              type="text"
              className={style.input}
              value={comment}
              invalid={comment == ""}
              valid={comment != ""}
              onChange={(e) => setComment(e.target.value)}
            />
            <Label className={style.label}>Rating :</Label>
            <Input
              className={style.input}
              type="select"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              invalid={rate == 0}
              valid={rate > 0}
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <Button className={style.commentButton} onClick={addComment}>
              add your comment
            </Button>
          </CardBody>
          {showDescription ? (
            <CardBody>
              <CardSubtitle>{description}</CardSubtitle>
            </CardBody>
          ) : (
            <div></div>
          )}
        </Card>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleComment: (username, comment, rate, photoId) => {
      dispatch({
        type: "COMMENT",
        payload: { username, comment, rate, photoId },
      });
    },
    handleLike: (photoId) => {
      dispatch({
        type: "LIKE",
        payload: { photoId },
      });
    },
    handleDisLike: (photoId) => {
      dispatch({
        type: "DISLIKE",
        payload: { photoId },
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(PhotoCard);
