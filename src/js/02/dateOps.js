import { refs } from '../02-timer';
import convertMs from './dateConverter';

let isStartAvailable = null;
let dateUnix = 0;
let timerId = 0;

const dateRefs = {
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	mins: document.querySelector('[data-minutes]'),
	secs: document.querySelector('[data-seconds]'),
};

export function launchProcess(dateObj) {
	dateUnix = dateObj.getTime();
	checkDate(dateUnix);

	refs.startBtn.addEventListener('click', startCountdown);
}

function checkDate(date) {
	if (date <= Date.now()) {
		alert('Please choose a date in the future');
		makeStartUnavailable();
	} else {
		makeStartAvailable();
	}
}

function startCountdown() {
	checkDate(dateUnix);

	if (!isStartAvailable) {
		return;
	}

	makeStartUnavailable();

	timerId = setInterval(runTimer, 1000);
}

function runTimer() {
	const timeDifference = dateUnix - Date.now();

	if (timeDifference > 0) {
		const formattedDate = convertMs(timeDifference);

		for (key of Object.keys(formattedDate)) {
			dateRefs[key].textContent = formattedDate[key];
		}
	} else {
		clearInterval(timerId);
	}
}

function makeStartAvailable() {
	refs.startBtn.removeAttribute('disabled');
	isStartAvailable = true;
}

export function makeStartUnavailable() {
	isStartAvailable = false;
	refs.startBtn.setAttribute('disabled', true);
}
