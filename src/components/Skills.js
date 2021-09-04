import React from "react";
import { Card } from "react-bootstrap";
import bootstrap from "../images/skills_img/bootstrap.png";
import java from "../images/skills_img/java.png";
import js from "../images/skills_img/js.png";
import mongodb from "../images/skills_img/mongo_db.png";
import python from "../images/skills_img/python.png";
import git from "../images/skills_img/git.png";
import react from "../images/skills_img/react.png";
import wordpress from "../images/skills_img/wordpress.jpg";
import medium from "../images/skills_img/medium.png";
import vsCode from "../images/skills_img/vscode.png";
import github from "../images/skills_img/github.png";
import adobeXd from "../images/skills_img/adobe_xd.png";


function Skills () {
    return (
        <div>
            <h2 className="mt-5 mx-5">Frontend &amp; Backend</h2>
            <p className="mt-2 mx-5">Languages I used on daily</p>

            <Card className="container"> 
                <div className="row d-flex py-5">
                    <div className="col-md-3 px-5">
                        <Card.Img src={js} style={{width: "50%"}}/>
                        <Card.Text className="py-5 text-center" style={{width: "50%"}}>Javascript</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={python} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "50%"}}>Python</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={react} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 mt-3 text-center" style={{width: "50%"}}>React</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={wordpress} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "55%"}}>Wordpress</Card.Text>
                    </div>
                </div>
                <div className="row mt-5 py-4">
                    <div className="col-md-3 px-5">
                        <Card.Img src={java} style={{width: "40%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "45%"}}>Java</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={git} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "50%"}}>Git</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={mongodb} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "55%"}}>MongoDB</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={bootstrap} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "50%"}}>Bootstrap</Card.Text>
                    </div>
                </div>
            </Card>

            <h2 className="mt-5 mx-5">Development Tools</h2>
            <p className="mt-2 mx-5">Software I use for designing and stay productive</p>

            <Card className="container mb-5"> 
                <div className="row d-flex py-5">
                    <div className="col-md-3 px-5">
                        <Card.Img src={adobeXd} style={{width: "50%"}}/>
                        <Card.Text className="py-5 text-center" style={{width: "50%"}}>Adobe XD</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={github} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "50%"}}>Github</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={vsCode} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 mt-3 text-center" style={{width: "50%"}}>Vs code</Card.Text>
                    </div>
                    <div className="col-md-3 px-5">
                        <Card.Img src={medium} style={{width: "50%"}}></Card.Img>
                        <Card.Text className="py-5 text-center" style={{width: "55%"}}>Medium</Card.Text>
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default Skills