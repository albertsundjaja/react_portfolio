import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import aiforsea from '../../assets/aiforsea.png';

const dangerousDriving = (props) => {
    return (
        <React.Fragment>
            <Row className="mt-4">
                <Col md={12}>
                    <h1 className="text-center">Dangerous Driving Classification</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12} className="text-center">
                    <Image src={aiforsea} alt="AI for SEA" style={{maxWidth:"300px"}} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <h2>Project Detail</h2>
                    <p>
                        This project is a solution to a competition hosted by AIforSEA (Grab).
                        The objective is to classify whether a driver drives dangerously.
                        This is a crucial problem for company such as Grab which offers peer-to-peer ridesharing service
                        to ensure their users' satisfaction and safety.
                        <br/><br/>
                        The data comes from the drivers' mobile phone sensors. The features are readings from accelerometer, gyroscope and accelerometer.
                        The challenges in this project are the cleaning, axes realignment and time-series analysis.
                        The accelerometer also measure gravity, and the axes differ from device to device as it depended on how the drivers put their mobile phones.
                        Gravity can be filtered using low-pass filter. In this project Butterworth filter is used to clean gravity from the readings.
                        The gravity is then used to find the quarternion rotation to realign the axes so that the axes are consistent across devices.
                        <br/><br/>
                        The cleaned and realigned data are then transformed using wavelet transform.
                        Fourier Transform is usually used to transform signal from time-domain to frequency domain,
                        however, it has a drawback. The transformed signal loses the time dependent feature.
                        Wavelet transform is a better alternative as it also preserve time feature.
                        Training features are then extracted from the resulting transformed waves. 
                        Examples of features extracted are the mean, median, zero crossings and hjorth parameters.
                        These features are then trained on a Random Forest Classifier.
                        <br/><br/>
                        The final model achieved an ROC AUC score of 0.65. Due to competition deadline (2 weeks competition time),
                        there was not enough time to tweak the model. I think that the prediction model can still be improved further.

                        The source code is available in the <a href="https://github.com/albertsundjaja/ride_safety">Github repo</a>
                    </p>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default dangerousDriving;