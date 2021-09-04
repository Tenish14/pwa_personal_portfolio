import React from "react";
import { Form, Card, Button } from "react-bootstrap"; 
import { AiOutlineGithub, AiFillLinkedin, AiFillMediumSquare } from "react-icons/ai";
import { links } from "./vars/links";

function Contact () {
    return (
        <div>
            <div className="container">
            <h2 className="mt-5">Contact</h2>
            <p>Let's get in touch</p>
         
            <Card>
                <div className="col-md-12">
                <Form className="mx-5 py-3">
                    <Form.Group>
                        <Form.Label className="my-2">Name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="my-2"
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="my-2">Email</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            placeholder="johnD@email.com"
                            className="my-2"
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label className="my-2">Phone</Form.Label>
                        <Form.Control 
                            type="number"
                            name="email"
                            placeholder="johnD@email.com"
                            className="my-2"
                            required
                        />
                    </Form.Group>
                   
                    <Form.Group>
                    <Form.Label className="my-2">How can I help you</Form.Label>
                    <Form.Control 
                        type="text"
                        name="message"
                        as="textarea"
                        placeholder="Write your message here..."
                        className="my-2"
                        required
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-block" >Send Message</Button>
                </Form>
                </div>
                </Card>

                <h2 className="mt-5">Socials</h2>
                <p>Other ways to keep connect</p>
                <div className="row py-4">
                    <div className="col-md-4">
                        <Card style={{width: "70%"}}>
                            <Card.Body className="d-flex">
                                <AiOutlineGithub size={30} />
                                <Card.Text className="px-3 mt-1"><a href={links.github} target="_blank" rel="noreferrer" style={{textDecoration: "none"}} className="text-dark">Github</a></Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{width: "70%"}}>
                        <Card.Body className="d-flex">
                                <AiFillLinkedin size={30} />
                                <Card.Text className="px-3 mt-1"><a href={links.linkedin} target="_blank" rel="noreferrer" style={{textDecoration: "none"}} className="text-dark">Linkedin</a></Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{width: "70%"}}>
                            <Card.Body className="d-flex">
                                <AiFillMediumSquare size={30} />
                                <Card.Text className="px-3 mt-1"><a href={links.medium} target="_blank" rel="noreferrer" style={{textDecoration: "none"}} className="text-dark">Medium</a></Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
               
            </div>
			
        </div>
    )
}

export default Contact