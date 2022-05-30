import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  Button,
  Input,
  Label,
} from "reactstrap";
import style from "../styles/PhotoGalleryPage.module.css";

export const PhotoCard = ({ photo, name, description, like }) => {
  const [showDescription, setShowDescription] = useState(false);
  const onClick = () => {
    setShowDescription(!showDescription);
  };
  const [isLike, setLike] = useState(false);
  const [numLike, setNumLike] = useState(like);
  const addLike = () => {
    setLike(true);
    setNumLike(numLike + 1);
  };
  const dislike = () => {
    setLike(false);
    setNumLike(numLike - 1);
  };
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const [commentList, setCommentList] = useState([]);
  const addComment = () => {
    if (username != "" && comment != "") {
      setCommentList([...commentList, { username, comment, rate }]);
      setComment("");
      setUsername("");
      setRate(0);
    }
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
            {numLike} {numLike > 1 ? "likes" : "like"}{" "}
          </span>
          <br />
          <div>
            {commentList.map((comment) => (
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
  );
};
