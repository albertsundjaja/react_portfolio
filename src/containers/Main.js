import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import Projects from './Projects/Projects';
import About from './Abouts/Abouts';
//import Housing from '../components/HousingAnalysis/Housing';
//import MovieReviewApp from './MovieReviewApp/MovieReviewApp.js';
import {Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

const main = (props) => { 
    return (
        <React.Fragment>
            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Brand href="/">Albert Sundjaja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <LinkContainer to="/" exact><Nav.Link>Projects</Nav.Link></LinkContainer>
                    <LinkContainer to="/about" exact><Nav.Link>About Me</Nav.Link></LinkContainer> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container className="mt-4 mb-2">
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={Projects} />
                
                <Route render={() => <h1>Error 404 Not Found</h1>} />
            </Container>
        </React.Fragment>
    );
}

export default main;