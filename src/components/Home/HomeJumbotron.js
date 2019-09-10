import React from 'react';
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import corgi from '../../assets/corgi.gif';
import {Bounce} from 'react-reveal';
import jumbotronBg from '../../assets/jumbotron_img.jpg';
import PortfolioGuide from '../PortfolioGuide/PortfolioGuide';

const homeJumbotron = (props) => {
    return (
        <React.Fragment>
            <Jumbotron fluid style={{backgroundImage:`url(${jumbotronBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
            boxShadow:"inset 0 0 0 2000px rgba(0,0,0,0.3)",color:"#fff", minHeight:"100vh"}} className="text-center">
                <Container className="h-100">
                    <Row className="h-100">
                    <Col md={12} className="my-auto">
                    <Bounce><h1 className="mb-3">Welcome to my online portfolio</h1></Bounce>
                    <Image src={corgi} alt="Profile Pic" roundedCircle className="mb-3"/>
                    <p>
                    This portfolio is also part of the project showcase.
                    It demonstrates the use of React, React Router and Redux.
                    <br/><br/>
                    </p>
                    <PortfolioGuide title="Happy Exploring" body={<React.Fragment>
                    Throughout this website, you will see cards with dark blue background
                    like this. Its purpose is to inform/guide you on what's happening and what's the technology behind it. 
                    </React.Fragment>}
                    />
                    </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    );
}

export default homeJumbotron;