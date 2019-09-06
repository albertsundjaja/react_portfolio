import React from 'react';
import { Row, Col } from 'react-bootstrap';

const contacts = (props) => {
    return (
        <React.Fragment>
            <Row className="mb-2">
                <Col md={12}>
                    <h1 className="text-center">Contact</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
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
        </React.Fragment>
    );
}

export default contacts;