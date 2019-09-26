import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PortfolioGuide from "../../components/PortfolioGuide/PortfolioGuide";
import Project from '../../components/Project/Project';
import HouseImg from '../../assets/house.png';
import MovieImg from '../../assets/movie.png';
import ReviewImg from '../../assets/review.jpg';
import DangerousDrivingImg from '../../assets/aiforsea2.png';
import RecommenderImg from '../../assets/recommender_system.png';
import PathfindingImg from '../../assets/pathfinding.jpg';
import PortfolioImg from '../../assets/portfolio.jpg';
import JwtImg from '../../assets/jwt.jpg';
import LazyLoad from 'react-lazyload';
import style from './Projects.module.css';
import {Fade} from 'react-reveal';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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

    // if the route is /projects, then this is true, remove the guided cards
    let isOwnPage = props.location.pathname === "/projects" || props.location.pathname === "/" ? true : false;
    let delayLazyLoad = 2000;
    if (isOwnPage) {
        delayLazyLoad = 1;
    }

    let normalLoadComp = (
        <Fade>
                    <Row>
                        <Col md={4} sm={6} className="mt-2 mb-2">
                            <Project title="Women's Clothing Review Classification"
                                        image={ReviewImg}
                                        subtitle="Natural Language Processing"
                                        subsubtitle="Python - Keras"
                                        text="An NLP project which aims to classify whether a review is positive or negative."
                                        buttonText="Working Demo"
                                        hrefTo="/sentiment" />
                        </Col>
                        <Col md={4} sm={6} className="mt-2 mb-2">
                            <Project title="JWT Authentication & Authorization"
                                    image={JwtImg}
                                    subtitle="JSON Web Tokens (JWT) - REST API"
                                    subsubtitle="React - Axios - Go"
                                    text="A project which demonstrates the use of JWT for securing REST API. JWT is a resource 
                                    friendly solution in securing API endpoints and server-to-server authentication & authorization."
                                    buttonText="Working Demo" 
                                    hrefTo="/jwt_auth" />
                        </Col>
                        <Col md={4} sm={6} className="mt-2 mb-2">
                            <Project title="Pathfinding & Map Generator"
                                    image={PathfindingImg}
                                    subtitle="A* algorithm"
                                    subsubtitle="Python"
                                    text="A mini project with the purpose of generating a random map for pathfinding problem.
                                    The map is generated randomly and a path solution is generated using A* algorithm."
                                    buttonText="Working Demo"
                                    hrefTo="/pathfind" />
                        </Col>
                    </Row>
                </Fade>
    );

    let lazyLoadComp = (
        <LazyLoad 
            placeholder={lazyPlaceholder}
            height={300} offset={-10}
            throttle={delayLazyLoad}>
                <Fade>
                    <Row>
                        <Col md={4} sm={6} className="mt-2 mb-2">
                            <Project title="Women's Clothing Review Classification"
                                    image={ReviewImg}
                                    subtitle="Natural Language Processing"
                                    subsubtitle="Python - Keras"
                                    text="An NLP project which aims to classify whether a review is positive or negative."
                                    buttonText="Working Demo"
                                    hrefTo="/sentiment" />
                        </Col>
                        <Col md={4} sm={6} className="mt-2 mb-2">
                            <Project title="JWT Authentication & Authorization"
                                    image={JwtImg}
                                    subtitle="JSON Web Tokens (JWT) - REST API"
                                    subsubtitle="React - Axios - Go"
                                    text="A project which demonstrates the use of JWT for securing REST API. JWT is a resource friendly solution 
                                    in securing API endpoints and server-to-server authentication & authorization."
                                    buttonText="Working Demo" 
                                    hrefTo="/jwt_auth" />
                        </Col>
                        <Col md={4} sm={6} className="mt-2 mb-2">
                            <Project title="Pathfinding & Map Generator"
                                    image={PathfindingImg}
                                    subtitle="A* algorithm"
                                    subsubtitle="Python"
                                    text="A mini project with the purpose of generating a random map for pathfinding problem.
                                    The map is generated randomly and a path solution is generated using A* algorithm."
                                    buttonText="Working Demo"
                                    hrefTo="/pathfind" />
                        </Col>
                    </Row>
                </Fade>
            </LazyLoad>
    );

    return (
        <React.Fragment>
            <Row className="mb-2">
                <Col md={12}>
                    <h1 className="text-center">PROJECT SHOWCASE</h1>
                    <hr className={style.divider}/>
                </Col>
            </Row>
            <Fade>
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
                    <Project title="This Online Portfolio"
                            image={PortfolioImg}
                            subtitle="React SPA"
                            subsubtitle="React - Redux - React Router"
                            text="This online portfolio is a React SPA showcasing the use of React, Redux and React Router.
                            Visit the homepage to see the working demo."
                            buttonText="Go to Home" 
                            linkTo="/home" />
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
            </Fade>
            {props.guideFlag && !isOwnPage ? 
            <Row className={style.fullview}>
                <Col md={12} className="my-auto text-center">
                <PortfolioGuide 
                title="Lazy Loading in Action"
                body={<React.Fragment>Continue scrolling down to see more projects. <br/><br/>
                    The delay is set to 2 seconds (to give the sense of loading). Actual render time is much faster <br/><br/>
                    This is to demonstrate a JS trick called lazy loading. It will only render the component when user has scrolled to this section.
                    This save time for initial rendering so that the page seem to load faster (giving the user a sense of faster website load)</React.Fragment>}/>
                </Col>
            </Row>
            : null }
            {isOwnPage ? normalLoadComp : lazyLoadComp}
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        guideFlag: state.guideFlag
    }
}

export default withRouter(connect(mapStateToProps)(projects));