import React from 'react';
import Projects from '../Projects/Projects';
import {Row, Col} from 'react-bootstrap';
import PortfolioGuide from '../../components/PortfolioGuide/PortfolioGuide';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const home = (props) => {
    const clearCookieAndRefresh = () => {
        console.log("clearing cookie");
        document.cookie = "CookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.reload();
    }

    const cookieConsentBody = (
        <React.Fragment>
            Want to see the cookie consent again? <br/> 
            Clicking the button below will clear cookies and refresh the page.
            <br/><br/>
            <button className="btn btn-success" onClick={clearCookieAndRefresh}>Click Here</button>
            <br/><br/>
            <small>Note: try refreshing manually after answering yay/nay, the popup shouldn't come up since your response is saved in the cookie</small>
        </React.Fragment>
    )

    const visitAboutMe = (
        <React.Fragment>
            Have you visited about me page yet?
            <br/><br/>
            <Link className="btn btn-success" to="/about">Click Here</Link>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            {props.guideFlag ?
            <Row className="mb-5">
                <Col md={12} className="text-center">
                    <PortfolioGuide
                        title="Cookies Consent"
                        body={cookieConsentBody}/>
                </Col>
            </Row>
            : null }
            <Projects />
            {props.guideFlag ?
            <Row className="mt-5 mb-5">
                <Col md={12} className="text-center">
                    <PortfolioGuide
                        title="Visit About Me"
                        body={visitAboutMe}/>
                </Col>
            </Row>
            : null }
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        guideFlag: state.guideFlag
    }
}

export default connect(mapStateToProps)(home);