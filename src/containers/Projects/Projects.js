import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Project from '../../components/Project/Project';
import HouseImg from '../../assets/house.png';
import MovieImg from '../../assets/movie.png';

const projects = (props) => {
    return (
        <React.Fragment>
            <Row className="mb-2">
                <Col md={12}>
                    <h1 className="text-center">Project Showcase</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={6} className="mt-2">
                    <Project title="US Housing Analysis"
                            image={HouseImg}
                            subtitle="Data Analytics - Python - Pandas - Seaborn - Matplotlib"
                            text="Analysis of the Ames Housing dataset. 
                            The analysis provides insights on factors that 
                            affect house prices."
                            buttonText="Full Report"
                            linkTo="/projects/us_housing" />
                </Col>
                <Col md={4} sm={6} className="mt-2">
                    <Project title="Movie Review App (IMDb copycat)"
                            image={MovieImg}
                            subtitle="React - Redux - React Router - REST API"
                            text="An IMDb copycat to search for movie ratings and reviews. 
                            Data is fetched from themoviedb.org.
                            This project also implements lazy loading (infinite scrolling)."
                            buttonText="Working Demo" 
                            linkTo="/projects/movie_review" />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default projects;