import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import style from "../styles/AboutMePage.module.css";

const AboutMePage = () => {
  return (
    <div>
      <div className={style.cards}>
        <Card className="col">
          <CardImg src="images/miyeon.png" alt="Avatar" width="100%" />
          <CardBody>
            <CardTitle className={style.title}>Motto :</CardTitle>
            <CardSubtitle>"After A Rain There's Always Rainbow"</CardSubtitle>
          </CardBody>
        </Card>
        <div className="col">
          <div className={style.info}>
            <Card className="col">
              <CardBody>
                <CardTitle className={style.title}>
                  Name and Education :
                </CardTitle>
                <CardSubtitle>
                  Name : <b> Thamolwan Jarungrattanapong</b> <br />
                  Education : <br />
                  <ul>
                    <li>Primary Education</li>
                    <span>
                      <b>Sunflower Trilingual School</b>
                    </span>
                    <li>Junior High School</li>
                    <span>
                      <b>Nawamintarachinuthit Satriwitthaya Phuttamonthon</b>
                    </span>
                    <li>Senior High School</li>
                    <span>
                      <b>Nawamintarachinuthit Satriwitthaya Phuttamonthon</b>
                    </span>
                  </ul>
                </CardSubtitle>
              </CardBody>
            </Card>
            <Card className="col">
              <CardBody>
                <CardTitle className={style.title}>
                  Favorite Subjects with Reasons :
                </CardTitle>
                <CardSubtitle>
                  <ul>
                    <li>
                      <b>English</b>
                    </li>
                    <span>
                      reason : Because I love to study language and English can
                      make me communicate easier
                    </span>
                    <li>
                      <b>Data Structure</b>
                    </li>
                    <span>
                      reason : Because this subject has concepts that I can
                      follow, and I think it is an interested subject
                    </span>
                    <li>
                      <b>Mathematics</b>
                    </li>
                    <span>
                      reason : Because it is a subject that I have been studying
                      since I was young, and it can use in the real life
                    </span>
                  </ul>
                </CardSubtitle>
              </CardBody>
            </Card>
            <Card className="col">
              <CardBody>
                <CardTitle className={style.title}>
                  Favorite Series with Description :
                </CardTitle>
                <CardSubtitle>
                  <ul>
                    <li>
                      <b>Beyond Evil</b>
                    </li>
                    <span>
                      description : This series is about a serial murderer in a
                      small city that will kill woman and take off her nails
                      then give them back to her family.
                    </span>
                    <li>
                      <b>Sky Castle</b>
                    </li>
                    <span>
                      description : This series is about the families that live
                      in a residence that want their children to study faculty
                      od medical science at Seoul National University.
                    </span>
                    <li>
                      <b>The Penthouse</b>
                    </li>
                    <span>
                      description : This series is about the elites and school
                      of musician.
                    </span>
                  </ul>
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMePage;
