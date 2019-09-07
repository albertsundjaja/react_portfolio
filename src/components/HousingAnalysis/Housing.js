import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Price13BR from '../../assets/price_distribution_br_1.png';
import Price13BR2 from '../../assets/price_distribution_br_2.png';
import Price13BR3 from '../../assets/price_bedrooms.png';
import MeanPriceSuburb from '../../assets/mean_price_neighborhood.png';
import HeatmapBedroom from '../../assets/heatmap_br_neighborhood.png';
import YearBuiltDistribution from '../../assets/year_built_distribution.png';
import PriceYearBuiltScatter from '../../assets/price_yearbuilt_scatter.png';

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
                    <h2>I. Dataset</h2>
                    <p>
                        This project uses the <a href="http://jse.amstat.org/v19n3/decock.pdf">Ames Housing dataset</a>.
                        The dataset is available on <a href="https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data">Kaggle</a>. 
                        The data used in this analysis is the training data which contains 1460 rows and 81 columns.

                        After exploration, the data appears to be clean and ready to use except for missing data. However, this missing data is
                        not an indication of error, it might just be that the house does not have that feature (e.g. Alley, Fence).
                        As we will be doing exploratory data analysis we can leave missing values as is, and only clean when needed.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <h2>II. Data Visualization</h2>
                    <h4 className="mt-3">II.1 Price Distribution for 1 - 3 BR houses</h4>
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
                    <br/><br/>
                    From the combined distribution chart, we could see that the 2 bedrooms properties (green) actually have lower mean in the price distribution compared to properties with 1 bedrooms (orange). 
                    However, the scatter plot of price vs bedrooms shows that there is a <b>direct relationship</b> between the Price and Bedroom. 
                    This indicates that <b>number of bedrooms is not the only factor</b> in determining the property price.
                    
                    {/* ----- */}

                    <h4 className="mt-5">II.2 Mean Price in Different Suburbs</h4>
                    We will look at how prices differ accross suburbs.
                    <br/> <br/>
                    <Row className="text-center">
                        <Col md={12}>
                            <img src={MeanPriceSuburb} alt="Suburbs Mean Price" style={{width:"600px", height:"400px"}} />
                        </Col>
                    </Row>
                    <br/>
                    The least expensive suburb is Meadow Vale (MeadowV) and the most expensive is North Ridge. 
                    It is astounding to see that the mean price difference is more than 3 times. It means that suburbs contribute a lot to how a house is priced.

                    {/* ----- */}

                    <h4 className="mt-5">II.3 Heatmap of Suburbs vs Number of Bedrooms</h4>
                    A heatmap is a 2D histogram with color indicating how frequent certain occurence is.
                    In the graph below, the color indicates the number of houses that fall in a certain Suburbs and Number of Bedrooms configuration.
                    The graph uses Viridis-R color config, where yellow indicates low frequency and deep blue indicates high frequency.
                    <br/><br/>
                    As an example, North Ames properties are dominated by 3BR houses.
                    <br/> <br/>
                    <Row className="text-center">
                        <Col md={12}>
                            <img src={HeatmapBedroom} alt="Suburbs vs Bedroom" style={{width:"600px", height:"400px"}} />
                        </Col>
                    </Row>
                    <br/>
                    From the heatmap, we could gain more insight on why North Ridge can have the highest mean in properties prices, 
                    the suburb is dominated by 4 bedroom properties, while Meadow Vale has a more balanced distribution.
                    <br/><br/>
                    We can also see why 2BR properties have smaller mean compared to 1BR properties (in previous Price Distribution chart), 
                    the majority of 2BR properties are located in North Ames and Old Town, which are among the least expensive neighborhood.

                    {/* ----- */}

                    <h4 className="mt-5">II.4 Year Built</h4>
                    We will investigate how year built affect property prices.
                    <br/> <br/>
                    <Row className="text-center">
                        <Col md={12}>
                            <img src={YearBuiltDistribution} alt="Year Built Distribution" style={{width:"600px", height:"350px"}} />
                        </Col>
                    </Row>
                    <br/>
                    The histogram seems to be trimodal, with peak at around 1910, 1960, and 2010. 
                    This is an interesting feature, the <b>peaks are roughly 50 years apart</b>. 
                    Is there a major construction cycle every 50 years? This will need more data and further investigation.
                    <br/><br/>
                    <Row className="text-center">
                        <Col md={12}>
                            <img src={PriceYearBuiltScatter} alt="Scatterplot Price vs Year built" style={{width:"400px", height:"350px"}} />
                        </Col>
                    </Row>
                    <br/>
                    From the scatter plot, there is a direct relationship between price and year built. 
                    We could see that more recently built properties tend to be priced higher.
                    This means that year can be a good factor in determining house prices.
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default housing;