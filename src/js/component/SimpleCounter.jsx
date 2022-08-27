import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
            <div className="calendar">
                <i className="fa-regular fa-clock"></i>
            </div>
			<div className="four">{props.digitFour}</div>
			<div className="Three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one pe-5">{props.digitOne}</div>
		</div>
	);
};

SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number,
}

export default SimpleCounter;
