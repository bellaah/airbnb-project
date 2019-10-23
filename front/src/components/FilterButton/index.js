import React, { useState } from 'react';
import './index.scss';

const FilterButton = ({ name, click }) => {
	return (
		<button className="Filter-btn" onClick={click}>
			{name}
		</button>
	);
};

export default FilterButton;
