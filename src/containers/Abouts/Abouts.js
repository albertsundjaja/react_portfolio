import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const abouts = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Row className="h-100">
                        <Col md={12} className="my-auto">
                            <h1 style={{fontSize:"5em"}} className="text-center">G'day mate!</h1>
                            
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="mt-4">
                    <h2>About me</h2>
                    <p>I am a passionate software developer / data scientist based in Melbourne, Australia. 
                        I have skills and interest in Front End, Back End, Data Analytics, Machine Learning and Artificial Intelligence. <br/><br/>

                        I love solving complex problems.
                        Hence, software development is the ideal real-life application for my passion ;) <br/><br/>

                        I am skilled in Python, Go, Javascript (React), Java and C#.
                        I can do responsive web development, backend REST API development, data analytic, machine learning regression/classification,
                        AI algorithm implementation, and Linux devops.

                    </p>
                </Col>
            </Row>
            <Row className="text-center mt-5">
                <Col xs={12}>
                    <SocialIcon url="https://github.com/albertsundjaja/" className="mr-1"/>
                    <SocialIcon url="https://www.linkedin.com/in/albert-sundjaja/" /> 
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default abouts;