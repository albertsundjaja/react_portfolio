import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PortfolioGuide from '../../components/PortfolioGuide/PortfolioGuide';
import {connect} from 'react-redux';

const abouts = (props) => {
    return (
        <React.Fragment>
            {props.guideFlag ?
            <Row>
                <Col md={12} className="text-center">
                <PortfolioGuide title="React Routing" 
                        body={<React.Fragment>The purpose of this page is to show React Router capabilities.
                            While browser address has changed to <b>/about</b>, the page doesn't actually get reloaded.
                            Thus it preserves any saved states.</React.Fragment>}/>
                </Col>
            </Row>
            : null }
            <Row className="mt-5">
                <Col md={7} className="mt-4 mb-2">
                    <Row className="h-100">
                        <Col xs={12}>
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
                </Col>
                <Col md={5} className="mt-4 mb-2">
                    <h2>Technical Skills</h2>
                    <h4>Programming Language</h4>
                    <p>Python, Go, Javascript, Java, C#, C++</p>
                    <h4>Front-end frameworks</h4>
                    <p>React, Bootstrap</p>
                    <h4>Database</h4>
                    <p>PostgreSQL, MongoDB, LevelDB</p>
                    <h4>Data Science Libraries</h4>
                    <p>Sklearn, PyTorch, Keras, Numpy, Pandas, Seaborn</p>
                    <h4>Linux DevOps</h4>
                    <p>Ubuntu, nginx</p>
                </Col>
            </Row>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        guideFlag: state.guideFlag
    }
}

export default connect(mapStateToProps)(abouts);