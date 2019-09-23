import React from 'react';
import { Container, Navbar, Nav, Row, Col, NavItem} from 'react-bootstrap';
import Home from './Home/Home';
import HomeJumbotron from '../components/Home/HomeJumbotron';
import About from './Abouts/Abouts';
import Projects from './Projects/Projects';
import Housing from '../components/HousingAnalysis/Housing';
import MovieReviewApp from './MovieReviewApp/MovieReviewApp';
import DangerousDriving from '../components/DangerousDriving/DangerousDriving';
import Pathfinder from './Pathfinder/Pathfinder';
import {Route, Switch} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import style from './Main.module.css';
import CookieConsent from 'react-cookie-consent';

const main = (props) => { 
    return (
        <React.Fragment>
            <CookieConsent
                style={{backgroundColor: "#B5EA76", color:"#000"}}
                enableDeclineButton
                buttonText="Yay"
                declineButtonText="Nay"
                onDecline={() => alert("You don't like cookies? ;(")}
                onAccept={() => alert("Enjoy your cookies ;)")}>
                Would you like some cookies? This cookie only stores your response.
            </CookieConsent>

            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Brand href="/home">Albert Sundjaja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav pullRight>
                    <LinkContainer to="/home" exact><Nav.Link active={false} >Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/projects" exact><Nav.Link active={false}>Projects</Nav.Link></LinkContainer>
                    <LinkContainer to="/about" exact><Nav.Link active={false}>About Me</Nav.Link></LinkContainer> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Route path="/home" exact component={HomeJumbotron} />

            <Container className="mt-4 mb-2">
                <Switch>
                    <Route path="/about" exact component={About} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/" exact component={Projects} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/us_housing" exact component={Housing} />
                    <Route path="/projects/movie_review" exact component={MovieReviewApp} />
                    <Route path="/projects/dangerous_driving" exact component={DangerousDriving} />
                    <Route path="/projects/pathfinder" exact component={Pathfinder} />
                    <Route render={() => <h1>Error 404 Not Found</h1>} />
                </Switch>
            </Container>

            <footer className={style.footer + " mt-4"}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h4>Albert Sundjaja</h4>
                            <h6 className="mb-4">Fullstack Developer - Data Scientist</h6>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/albertsundjaja/">
                            <i className="fab fa-fw fa-github"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://medium.com/@albertsundjaja">
                            <i className="fab fa-fw fa-medium"></i>
                            </a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/albert-sundjaja/">
                            <i className="fab fa-fw fa-linkedin-in"></i>
                            </a>

                        </Col>

                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
}

export default main;