import React from 'react';

import FilterButton from '../../components/FilterButton/index';
import style from './style.scss';

const FilterBar = () => {
	const buttonNameList = ['날짜', '인원', '숙소유형', '가격'];

	const makeFilterButton = buttonNameList =>
		buttonNameList.map(buttonName => (
			<FilterButton name={buttonName}></FilterButton>
		));

	return <div className="Filter-bar">{makeFilterButton(buttonNameList)}</div>;
};

export default FilterBar;
