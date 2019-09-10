import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PortfolioGuide from '../../components/PortfolioGuide/PortfolioGuide';


const abouts = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col md={12} className="text-center">
                <PortfolioGuide title="React Routing" 
                        body={<React.Fragment>The purpose of this page is to show React Router capabilities.
                            While browser address has changed to <b>/about</b>, the page doesn't actually get reloaded.
                            Thus it preserves any saved states.</React.Fragment>}/>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6}>
                    <Row className="h-100">
                        <Col md={12} className="my-auto">
                            <h1 style={{fontSize:"5em"}} className="text-center">G'day mate!</h1>
                            
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="mt-4 mb-4">
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
        </React.Fragment>
    );
}

export default abouts;