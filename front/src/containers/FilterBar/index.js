import React from 'react';

import FilterButtonAndModal from '../../components/FilterButtonAndModal/index';
import './index.scss';

const FilterBar = () => {
	const buttonNameList = ['날짜', '인원', '숙소유형', '가격'];

	const makeFilterButton = buttonNameList =>
		buttonNameList.map((buttonName, index) => (
			<FilterButtonAndModal buttonName={buttonName} key={index} />
		));

	return <div className="Filter-bar">{makeFilterButton(buttonNameList)}</div>;
};

export default FilterBar;
