// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
	render() {
		return (
			<div>
				<p>Name: {this.props.name}</p>
				<p>Producer: {this.props.producer}</p>
				<p>Watermark: {this.props.hasWatermark}</p>
				<p>Color: {this.props.color}</p>
				<p>Weight: {this.props.weight}</p>
			</div>
		)
	}
}


Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
	weight: function(prop, propName) {
		let weight =  prop[propName];
		if (weight === undefined) {
			return new Error('No');
		} else if (isNaN(weight)) {
			return new Error("NO");
		} else if (weight < 80 || weight > 300) {
			return new Error("NNNOOOO");
		}
	}
}

Product.defaultProps = {
	hasWatermark: false
}

