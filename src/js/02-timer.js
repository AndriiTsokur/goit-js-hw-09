import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

import { launchProcess } from './02/dateOps';
import { makeStartUnavailable } from './02/dateOps';

export const refs = {
	datePicker: document.querySelector('#datetime-picker'),
	startBtn: document.querySelector('[data-start]'),
};

const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	position: 'below center',
	onClose(selectedDates) {
		launchProcess(selectedDates[0]);
	},
};

makeStartUnavailable();
flatpickr(refs.datePicker, options);
