import React, {useState} from 'react';
import {Jumbotron, Container, Row, Col, Image} from 'react-bootstrap';
import corgi from '../../assets/corgi.gif';
import {Bounce} from 'react-reveal';
import jumbotronBg from '../../assets/jumbotron_img.jpg';
import PortfolioGuide from '../PortfolioGuide/PortfolioGuide';
import {connect} from 'react-redux';
import SliderCheckbox from '../UI/SliderCheckbox';

const HomeJumbotron = (props) => {

    let guideCard = (
        <React.Fragment>
            This portfolio is also part of the project showcase. This website is a React SPA.
            It demonstrates the use of React, React Router and Redux.
            <br/><br/>
            Throughout this website, you will see cards with dark blue background
            like this. Its purpose is to inform/guide you on what's happening and what's the technology behind it. 
            <br/><br/>
            To turn off this feature, click the slider below<br/><br/>
            <SliderCheckbox isChecked={props.guideFlag} handleOnChange={props.onRadioChange} />
            <br/><br/>
            This slider stores state in the Redux store, so that the on/off state is available across all components.
        </React.Fragment>
    )
    if (!props.guideFlag) {
        guideCard = (
        <React.Fragment>
            You turned off the guide feature
            <br/><br/>
            <SliderCheckbox isChecked={props.guideFlag} handleOnChange={props.onRadioChange} />
            <br/><br/>
            This slider stores state in the Redux store, so that the on/off state is available across all components.
        </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Jumbotron fluid style={{backgroundImage:`url(${jumbotronBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",
            boxShadow:"inset 0 0 0 2000px rgba(0,0,0,0.3)",color:"#fff", minHeight:"100vh"}} className="text-center">
                <Container className="h-100">
                    <Row className="h-100">
                    <Col md={12} className="my-auto">
                    <Bounce><h1 className="mb-3">Welcome to my online portfolio</h1></Bounce>
                    <Image src={corgi} alt="Profile Pic" roundedCircle className="mb-3"/>
                    <PortfolioGuide title="Guide Cards" body={guideCard}
                    />
                    </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        guideFlag: state.guideFlag
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRadioChange: () => dispatch({type:'TOGGLE_GUIDE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeJumbotron);