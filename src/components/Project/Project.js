import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const project = (props) => {

    const goToProject = () => {
        if (props.linkTo) {
            console.log("linkto");
            console.log(props.linkTo);
            const link = props.linkTo;
            props.history.push(link);
            return;
        }
        if (props.hrefTo) {
            window.location = props.hrefTo;
        }
    }

    return (
        <Card style={{height: "525px"}} className="rounded-lg">
            <Card.Img variant="top" src={props.image} style={{height:"160px"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    {props.subtitle}
                </Card.Subtitle>
                <small className='mb-4 text-muted'>
                    {props.subsubtitle}
                </small>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button className="mt-auto" variant="success" onClick={goToProject}>{props.buttonText}</Button>
            </Card.Body>
        </Card>
    )
}

export default withRouter(project);