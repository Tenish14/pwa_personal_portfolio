import React from "react";
import { Card } from "react-bootstrap";
import ecom_web from "../images/ecom_web.png";
import landing_page from "../images/landing_page.png";
import python_programming from "../images/python.png"

function Project () {
    return (
        <div>
            <h2 className="text-center mt-2">Project</h2>
            <p className="text-center">Projects that I made before</p>

            <div className="container my-5 ">
                <div className="row ">
                    <div className="md">
                        <Card>
                            <Card.Img varaint="top" src={ecom_web}></Card.Img>
                            <Card.Body>
                                <Card.Title>Ecommerce Platform</Card.Title>
                                <Card.Text>I have created a full-stack ecommerce website for sell sport accessories.</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Deloped using ReactJs and ExpressJs</Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="md">
                        <Card>
                            <Card.Img varaint="top" src={landing_page}></Card.Img>
                            <Card.Body>
                                <Card.Title>Forward School Landing Page</Card.Title>
                                <Card.Text>Created a page to signup and know more information about the course</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Developed using Wordpress Elementor</Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>


            <div className="container my-5">
                <div className="row">
                    <div className="md">
                        <Card>
                            <Card.Img varaint="top" src={python_programming}></Card.Img>
                            <Card.Body>
                                <Card.Title>UI for Sending data by Serial Port</Card.Title>
                                <Card.Text>I have created a UI to send and receive hex data by using serial ports </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">Developed using Python </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>


        </div>
       
    )
}

export default Project