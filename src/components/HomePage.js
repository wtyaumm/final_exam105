import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Input,
  Button,
} from "reactstrap";
import style from "../styles/HomePage.module.css";

const HomePage = () => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([comment]);

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
        <div className="col">
          <Card className="col">
            <CardBody>
              <CardTitle className={style.title}>Breaking News</CardTitle>
              <CardSubtitle>
                New Released Album! <br />
                listen now in every platform
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card className="col">
            <CardBody>
              <CardTitle className={style.title}>Comment Board</CardTitle>
              <div className={style.addComment}>
                <Input
                  type="text"
                  placeholder="Send your love to Seventeen"
                  value={comment}
                  className={style.input}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  className={style.button}
                  onClick={(e) =>
                    setCommentList([...commentList, comment], setComment(""))
                  }
                >
                  send!
                </Button>
              </div>
              <Card className={style.commentBoard}>
                {commentList.map((e) => (
                  <>
                    <div>{e}</div>
                  </>
                ))}
              </Card>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
