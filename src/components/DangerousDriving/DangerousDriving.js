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
                        Source code is available on my <a href="https://github.com/albertsundjaja/ride_safety">Github</a>
                        <br/><br/>
                    </p>
                    <h2>Dataset</h2>
                    <p>
                        The data is provided by Grab. The data comes from the drivers' mobile phone sensors. The features are readings from accelerometer, gyroscope and accelerometer.
                    </p>
                    <h4>Cleaning and preprocessing</h4>
                        The challenges in this project are the cleaning, axes realignment and time-series analysis.
                        The accelerometer also measure gravity, and the axes differ from device to device as it depended on how the drivers put their mobile phones.
                        Cleaning processes are as below:
                    <ul>
                        <li>Gravity is filtered using low-pass filter (Butterworth)</li>
                        <li>Axes are rotated using gravity direction (quaternion rotation) so all readings have consistent axes</li>
                    </ul>
                    <p>
                        Cleaned data is then transformed using wavelet transform.
                        Fourier Transform is usually used to transform signal from time-domain to frequency domain,
                        however, it has a drawback. The transformed signal loses the time dependent feature.
                        Wavelet transform is a better alternative as it also preserve time feature.
                        Training features are then extracted from the resulting transformed waves. 
                        <br/><br/>
                        Features extracted are:
                    </p>
                    <ul>
                        <li>5, 25, 75, 95 percentile</li>
                        <li>median</li>
                        <li>mean</li>
                        <li>standard deviation</li>
                        <li>variance</li>
                        <li>residual mean square (RMS)</li>
                        <li>maximum</li>
                        <li>minimum</li>
                        <li>maximum and minimum difference</li>
                        <li>Peak-to-Average ratio</li>
                        <li>kurtosis</li>
                        <li>skew</li>
                        <li>standard error of mean</li>
                        <li>entropy</li>
                        <li>zero-crossings</li>
                        <li>mean-crossings</li>
                        <li>hjorth parameters (mobility and complexity)</li>
                    </ul>
                    <h2>Classification Model</h2>
                    <p>
                        These features are then trained on a Random Forest Classifier.
                        <br/><br/>
                        The final model achieved an <b>ROC AUC score of 0.65</b>. Due to competition deadline (2 weeks competition time),
                        there was not enough time to tweak the model. I think that the prediction model can still be improved further.
                    </p>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default dangerousDriving;