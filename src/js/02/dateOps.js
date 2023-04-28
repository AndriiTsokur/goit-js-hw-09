import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from '../02-timer';
import convertMs from './dateConverter';

const notifyOptions = {
	position: 'center-center',
	cssAnimationStyle: 'zoom',
	clickToClose: true,
	width: '350px',
	fontSize: '18px',
};

const dateRefs = {
	days: document.querySelector('[data-days]'),
	hours: document.querySelector('[data-hours]'),
	mins: document.querySelector('[data-minutes]'),
	secs: document.querySelector('[data-seconds]'),
};

let isStartAvailable = null;
let dateUnix = 0;
let timerId = 0;

export function launchProcess(dateObj) {
	dateUnix = dateObj.getTime();
	checkDate(dateUnix);

	refs.startBtn.addEventListener('click', startCountdown);
}

function checkDate(date) {
	if (date <= Date.now()) {
		Notify.failure('Please choose a date in the future', notifyOptions);
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

		Object.keys(formattedDate).map(
			key => (dateRefs[key].textContent = formattedDate[key])
		);
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
