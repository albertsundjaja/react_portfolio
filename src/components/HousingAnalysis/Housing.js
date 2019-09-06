import React from 'react';

import { Row, Col } from 'react-bootstrap';

const housing = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col md={12}>
                    <h1>US Housing Price Analysis</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h2>Dataset</h2>
                    <p>
                        This project uses the Ames Housing dataset http://jse.amstat.org/v19n3/decock.pdf
                        The dataset is available on Kaggle https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data
                        The data used in this analysis is the training data which contains 1460 rows and 81 columns
                    </p>
                </Col>
            
            </Row>
        </React.Fragment>
    );
}

export default housing;