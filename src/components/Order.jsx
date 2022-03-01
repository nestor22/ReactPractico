import React from 'react';
import '../styles/Order.scss';
import fechita from '@icons/flrechita.svg'
const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={fechita} alt="arrow" />
		</div>
	);
}

export default Order;
