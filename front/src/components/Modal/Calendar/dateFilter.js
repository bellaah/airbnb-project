import React from 'react';
import moment from 'moment';
import { DayPickerRangeController, isInclusivelyBeforeDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './dateFilter.scss';

// props.ButtonText = '날짜' > 캘린더에서 날짜를 선택할 때 마다 버튼안의 ButtonText를 바꾼다.
export default class Calendar extends React.Component {
	state = {
		startDate: null,
		endDate: null,
		focusedInput: 'startDate',
	};

	setButtonText(startDate, endDate) {
		if (endDate == null) {
			this.props.setText(`${startDate.format('M[월]D[일]')}-체크아웃`);
		} else {
			this.props.setText(
				`${startDate.format('M[월]D[일]')}-${endDate.format('M[월]D[일]')}`,
			);
		}
	}

	render() {
		return (
			<DayPickerRangeController
				startDate={this.state.startDate}
				endDate={this.state.endDate}
				hideKeyboardShortcutsPanel={true}
				onDatesChange={({ startDate, endDate }) => {
					this.setState({ startDate, endDate });
					this.setButtonText(startDate, endDate);
				}}
				focusedInput={this.state.focusedInput}
				onFocusChange={focusedInput => {
					this.setState({ focusedInput: focusedInput || 'startDate' });
				}}
				// 지난 날짜 disable
				isOutsideRange={day =>
					isInclusivelyBeforeDay(day, moment().add(-1, 'days'))
				}
				// 2달 씩 표시
				numberOfMonths={2}
			/>
		);
	}
}
