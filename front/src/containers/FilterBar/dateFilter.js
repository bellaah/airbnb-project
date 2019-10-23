import React from 'react';
import moment from 'moment';
import { DayPickerRangeController, isInclusivelyBeforeDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class Calendar extends React.Component {
	state = {
		startDate: null,
		endDate: null,
		focusedInput: 'startDate',
	};
	render() {
		return (
			<DayPickerRangeController
				startDate={this.state.startDate}
				endDate={this.state.endDate}
				onDatesChange={({ startDate, endDate }) =>
					this.setState({ startDate, endDate })
				}
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
