import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PortfolioGuide from "../../components/PortfolioGuide/PortfolioGuide";
import Project from '../../components/Project/Project';
import HouseImg from '../../assets/house.png';
import MovieImg from '../../assets/movie.png';
import DangerousDrivingImg from '../../assets/aiforsea2.png';
import RecommenderImg from '../../assets/recommender_system.png';
import LazyLoad from 'react-lazyload';
import style from './Projects.module.css';

const projects = (props) => {
    const lazyPlaceholder = (
        <div style={{height:"300px"}}>
        <Row className="my-auto">
            <Col md={12} className="text-center">
                <h5>Loading ... (please wait, delay is intentionally set at 2 seconds)</h5>
            </Col>
        </Row>
        </div>
    )
    return (
        <React.Fragment>
            <Row className="mb-2">
                <Col md={12}>
                    <h1 className="text-center">PROJECT SHOWCASE</h1>
                    <hr className={style.divider}/>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={12} className="mt-2 mb-2">
                    <Project title="US Housing Analysis"
                            image={HouseImg}
                            subtitle="Data Analytics - Data Visualization - Linear Regression"
                            subsubtitle="Python - Pandas - Seaborn - Matplotlib - Sklearn"
                            text="Analysis of the Ames Housing dataset. 
                            The analysis provides insights on factors that 
                            affect house prices. A linear model with Lasso regularization was fitted to predict house price."
                            buttonText="Full Report"
                            linkTo="/projects/us_housing" />
                </Col>
                <Col md={4} sm={12} className="mt-2 mb-2">
                    <Project title="Movie Review App (IMDb copycat)"
                            image={MovieImg}
                            subtitle="REST API"
                            subsubtitle="React - Redux - React Router"
                            text="An IMDb copycat to search for movie ratings and reviews. 
                            Data is fetched from themoviedb.org.
                            This project also implements lazy loading (infinite scrolling)."
                            buttonText="Working Demo" 
                            linkTo="/projects/movie_review" />
                </Col>
                <Col md={4} sm={12} className="mt-2 mb-2">
                    <Project title="Dangerous Driving Classification"
                            image={DangerousDrivingImg}
                            subtitle="Classification - Machine Learning"
                            subsubtitle="Python - Sklearn - Pandas - Scipy"
                            text="A machine learning competition hosted by AIforSEA (Grab). Grab is the ASEAN's equivalent
                            of Uber. The competition objective is to classify whether a driver drives dangerously. 
                            The features used for the model are sensors measurement from mobile phones."
                            buttonText="Project Detail" 
                            linkTo="/projects/dangerous_driving" />
                </Col>
            </Row>
            
            <Row className={style.fullview}>
                <Col md={12} className="my-auto text-center">
                <PortfolioGuide 
                title="Lazy Loading in Action"
                body={<React.Fragment>Continue scrolling down to see more projects. <br/><br/>
                    The delay is set to 2 seconds (to give the sense of loading). Actual render time is much faster ;) <br/><br/>
                    This is to demonstrate a JS trick called lazy loading. It will only render the component when user has scrolled to this section.
                    This save time for initial rendering so that the page seem to load faster (giving the user a sense of faster website load)</React.Fragment>}/>
                </Col>
            </Row>
            <LazyLoad 
            placeholder={lazyPlaceholder}
            height={300} offset={0}
            throttle={2000}>
                <Row>
                    <Col md={4} sm={6} className="mt-2 mb-2">
                        <Project title="Recommender System"
                                image={RecommenderImg}
                                subtitle="Data Analytics - Data Visualization - Linear Regression"
                                subsubtitle="Python - Pandas - Seaborn - Matplotlib - Sklearn"
                                text="Analysis of the Ames Housing dataset. 
                                The analysis provides insights on factors that 
                                affect house prices. A linear model with Lasso regularization was fitted to predict house price."
                                buttonText="Working Demo"
                                linkTo="/projects/us_housing" />
                    </Col>
                    <Col md={4} sm={6} className="mt-2 mb-2">
                        <Project title="JWT Authentication & Authorization"
                                image={MovieImg}
                                subtitle="JSON Web Tokens (JWT) - REST API"
                                subsubtitle="React - Axios - Go"
                                text="An IMDb copycat to search for movie ratings and reviews. 
                                Data is fetched from themoviedb.org.
                                This project also implements lazy loading (infinite scrolling)."
                                buttonText="Working Demo" 
                                linkTo="/projects/movie_review" />
                    </Col>
                    <Col md={4} sm={6} className="mt-2 mb-2">
                        <Project title="Pathfinding Artificial Map Generator"
                                image={MovieImg}
                                subtitle="A* algorithm"
                                subsubtitle="Python"
                                text="A mini project with the purpose of generating a random map for pathfinding problem.
                                The map is generated randomly and a path solution is generated using A* algorithm."
                                buttonText="Working Demo"
                                linkTo="/projects/movie_review" />
                    </Col>
                </Row>
            </LazyLoad>
        </React.Fragment>
    );
}

export default projects;