import React from 'react';
import {Card} from 'react-bootstrap';

const portfolioGuide = (props) => {
    return (
        <React.Fragment>
            <Card style={{backgroundColor:"#1D3048", color:"#fff", padding:"10px"}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Body>
                    {props.body}
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default portfolioGuide;