import React from "react";
import { Form, Card, Button } from "react-bootstrap"; 

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
            </div>
			
        </div>
    )
}

export default Contact