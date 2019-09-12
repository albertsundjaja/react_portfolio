import React from 'react';
import PropTypes from 'prop-types';
import style from './SliderCheckbox.module.css';

const sliderCheckbox = (props) => {
    let sliderLabel = "On";
    if (!props.isChecked) {
        sliderLabel = "Off";
    }
    return (
        <div>
            <label className={style.switch}>
                <input type="checkbox" defaultChecked={props.isChecked} value={props.isChecked} onChange={props.handleOnChange} />
                <div className={style.slider}></div>
            </label>
            <label className={style.onlabel}>
                {sliderLabel}
            </label>
        </div>
    );
}

sliderCheckbox.propTypes = {
    handleOnChange: PropTypes.func,
    isChecked: PropTypes.bool
};
  
export default sliderCheckbox;
