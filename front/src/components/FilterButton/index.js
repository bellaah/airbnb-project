import React, { useState } from 'react';
import style from './index.scss';

const FilterButton = ({ name }) => {
	return <button className="Filter-btn">{name}</button>;
};

export default FilterButton;
