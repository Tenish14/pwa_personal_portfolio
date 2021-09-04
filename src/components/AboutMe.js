import React from "react";
import { Card } from "react-bootstrap";
import tenish_img from "../images/tenish_img.jpg";
import { links } from "./vars/links";
import medium1 from "../images/13_useful_javascript_array.jpg";
import medium2 from "../images/10_awesome_js_library.jpg";
import medium3 from "../images/top_11_tips.jpg";
import medium4 from "../images/send_email_reactjs.jpg";
import medium5 from "../images/npm_tricks.jpg";
import medium6 from "../images/python_script.jpg" 

function AboutMe () {
    console.log()
    return (
        <React.Fragment>
        <Card className="m-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card.Img 
                        src={tenish_img}
                        style={
                            {height: "200px",
                            width: "150px"}}
                        className="p-3"    >

                        </Card.Img>

                    </div>
                    <div className="col-md-8 p-3">
                        <Card.Text><b>Name:</b> Tenish</Card.Text>
                        <Card.Text><b>Profile:</b> Full Stack Developer</Card.Text>
                        <Card.Text><b>Email:</b> Tenish02@gmail.com</Card.Text>
                        <Card.Text ><b>Linkedin:</b> <a href={links.linkedin} target="_blank" rel="noreferrer noopener" className="text-dark"  >Tenish Remish</a></Card.Text>
                        <Card.Text><b>Medium:</b> <a href={links.medium} target="_blank" rel="noreferrer noopener" className="text-dark" >Crunchyknuckles</a></Card.Text>
                        <Card.Text><b>Github:</b> <a href={links.github} target="_blank" rel="noreferrer noopener" className="text-dark" >Tenish14</a></Card.Text>

                    </div>
                    <div className="col-md-10 p-3">
                        <Card.Title><b>About Me</b></Card.Title>
                        <Card.Text>
                        I am currently persuading in Software Engineering course. 
                        Eager to learn more about programming languages and help people with my knowledge. 
                        </Card.Text>
                        

                    </div>
                </div>
            </div>
       </Card>

       <div>
           <h2 className="text-center">Articles</h2>
           <p className="text-center">Articles written by me in Medium</p>
           <div className="container my-5">
               <div className="row">
                   <div className="col-md-4 my-2">
                       <Card>
                           <Card.Img variant="top" src={medium1}></Card.Img>
                           <Card.Body>
                               <Card.Title><a href={links.medium1} target="_blank" rel="noreferrer noopener" className="text-dark" style={{textDecoration: "none"}}>13 Useful JavaScript Array Tips and Tricks You Should Know</a></Card.Title>
                               <Card.Text>An array is one of the most common concepts of Javascript, which gives us a lot of possibilities to work with data stored inside.</Card.Text>
                           </Card.Body>
                       </Card>
                   </div>
                   <div className="col-md-4 my-2">
                   <Card>
                        <Card.Img variant="top" src={medium2}></Card.Img>
                        <Card.Body>
                            <Card.Title><a href={links.medium2} target="_blank" rel="noreferrer noopener" className="text-dark" style={{textDecoration: "none"}}>10 Awesome JavaScript Libraries You Should Try Out in 2021</a></Card.Title>
                            <Card.Text className="pb-2">JavaScript is one of the most popular languages on the web. Even though it was initially developed just for web pages, it has seen exponential growth in the past two decades. </Card.Text>
                        </Card.Body>
                    </Card>
                   </div>
                   <div className="col-md-4 my-2">
                   <Card>
                        <Card.Img variant="top" src={medium3}></Card.Img>
                        <Card.Body>
                            <Card.Title><a href={links.medium3} target="_blank" rel="noreferrer noopener" className="text-dark" style={{textDecoration: "none"}}>The top 11 productivity tips for Software Engineers</a></Card.Title>
                            <Card.Text>Being a productive programmer brings tons of pluses, including higher pay, office benefits, increased popularity among peers, and internal satisfaction </Card.Text>
                        </Card.Body>
                    </Card>

                   </div>
               </div>
           </div>
           <div className="container my-5">
               <div className="row">
                   <div className="col-md-4 my-2">
                       <Card>
                           <Card.Img variant="top" src={medium4}></Card.Img>
                           <Card.Body>
                               <Card.Title><a href={links.medium4} target="_blank" rel="noreferrer noopener" className="text-dark" style={{textDecoration: "none"}}>How to send emails from a form in React (EmailJS)</a></Card.Title>
                               <Card.Text>This post will guide you through the process of creating a form and functionality in ReactJS (with hooks) that will enable us to send emails. We will use a third-party service called EmailJS.</Card.Text>
                           </Card.Body>
                       </Card>
                   </div>
                   <div className="col-md-4 my-2">
                   <Card>
                        <Card.Img variant="top" src={medium5}></Card.Img>
                        <Card.Body>
                            <Card.Title><a href={links.medium5} target="_blank" rel="noreferrer noopener" className="text-dark" style={{textDecoration: "none"}}>These NPM Tricks Will Make You a Pro</a></Card.Title>
                            <Card.Text className="pb-4">I’ve learned things along the way that I wish I knew when I started. Let’s call them tricks, things that drastically improved my way of working with NPM. Today I want to share my top 5 tricks with you.</Card.Text>
                        </Card.Body>
                    </Card>
                   </div>
                   <div className="col-md-4 my-2">
                   <Card>
                        <Card.Img variant="top" src={medium6}></Card.Img>
                        <Card.Body>
                            <Card.Title><a href={links.medium6} target="_blank" rel="noreferrer noopener" className="text-dark" style={{textDecoration: "none"}}>Create Executable from Python Script using Pyinstaller</a></Card.Title>
                            <Card.Text className="pb-4">PyInstaller bundles a Python application and all its dependencies into a single package. The user can run the packaged app without installing a Python interpreter or any modules.</Card.Text>
                        </Card.Body>
                    </Card>

                   </div>
               </div>
           </div>

       </div>
       </React.Fragment>

    
       
    )
}

export default AboutMe