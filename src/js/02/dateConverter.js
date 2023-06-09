export default function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	const formattedDate = {
		days: days,
		hours: hours,
		mins: minutes,
		secs: seconds,
	};

	Object.keys(formattedDate).map(
		key => (formattedDate[key] = addLeadingZero(formattedDate[key]))
	);

	return formattedDate;
}

function addLeadingZero(value) {
	return value.toString().padStart(2, '0');
}
