import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Price13BR from '../../assets/price_distribution_br_1.png';
import Price13BR2 from '../../assets/price_distribution_br_2.png';
import Price13BR3 from '../../assets/price_bedrooms.png';

const housing = (props) => {
    return (
        <React.Fragment>
            <Row className="mt-4">
                <Col md={12}>
                    <h1 className="text-center">US Housing Price Analysis</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <h2>Dataset</h2>
                    <p>
                        This project uses the <a href="http://jse.amstat.org/v19n3/decock.pdf">Ames Housing dataset</a>.
                        The dataset is available on <a href="https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data">Kaggle</a>. 
                        The data used in this analysis is the training data which contains 1460 rows and 81 columns.

                        After exploration, the data appears to be clean and ready to use except for missing data. However, this missing data is
                        not an indication of error, it might just be that the house does not have that feature (e.g. Alley, Fence).
                        As we will be doing data analysis we can leave missing values as is, and only clean when needed.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <h2>Data Visualization</h2>
                    <h4 className="mt-3">Price Distribution for 1 - 3 BR houses</h4>
                    We will start with looking at how the number of bedrooms affect the properties price. 
                    <br/> <br/>
                    <Row className="text-center">
                        <Col md={12}>
                            <img src={Price13BR} alt="1 - 3 Bedroom Price Distribution" style={{width:"500px", height:"500px"}} />
                        </Col>
                    </Row>
                    <br/>
                    It is unexpected to see that they all have similar prices despite the different in number of bedrooms. 
                    Intuition tells that the more bedrooms, the higher the price will be. This does not seem to be the case as the distribution only differ slightly.
                    <br/><br/>
                    <img src={Price13BR2} alt="1 - 3 Bedroom Price Distribution" />
                    <img src={Price13BR3} alt="Price vs Bedroom" />
                    
                    From the combined distribution chart, we could see that the 2 bedrooms properties (green) actually have lower mean in the price distribution compared to properties with 1 bedrooms (orange). 
                    However, the scatter plot of price vs bedrooms shows that there is a direct relationship between the Price and Bedroom. 
                    This indicates that <b>number of bedrooms is not the only factor</b> in determining the property price.
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default housing;