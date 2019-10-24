import React from 'react';
import moment from 'moment';
import { DayPickerRangeController, isInclusivelyBeforeDay } from 'react-dates';
import { FILTER_BY_DATE } from '../../../containers/Main/query';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './index.scss';

// props.ButtonText = '날짜' > 캘린더에서 날짜를 선택할 때 마다 버튼안의 ButtonText를 바꾼다.
export default class Calendar extends React.Component {
	state = {
		startDate: null,
		endDate: null,
		focusedInput: 'startDate',
		defaultText: '날짜',
	};

	setButtonText(startDate, endDate) {
		if (!startDate && !endDate) {
			this.props.setText({ text: this.defaultText });
		} else if (!endDate) {
			const text = `${startDate.format('M[월]D[일]')}-체크아웃`;
			this.props.setText({ text });
		} else {
			const text = `${startDate.format('M[월]D[일]')}-${endDate.format(
				'M[월]D[일]',
			)}`;
			const checkIn = startDate.format('YYYY-MM-DD');
			const checkOut = endDate.format('YYYY-MM-DD');
			this.props.setText({
				text,
				params: { checkIn, checkOut },
				query: FILTER_BY_DATE,
			});
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
				isOutsideRange={day =>
					isInclusivelyBeforeDay(day, moment().add(-1, 'days'))
				}
				numberOfMonths={2}
			/>
		);
	}
}
