const refs = {
	body: document.body,
	btnStart: document.querySelector('[data-start]'),
	btnStop: document.querySelector('[data-stop]'),
};

let intervalId = null;

refs.btnStart.addEventListener('click', handleStart);
refs.btnStop.addEventListener('click', handleStop);

function handleStart() {
	refs.btnStart.setAttribute('disabled', true);
	refs.btnStart.setAttribute('style', 'opacity:0.5; cursor:not-allowed');

	intervalId = setInterval(changeBodyColor, 1000);
}

function handleStop() {
	clearInterval(intervalId);

	refs.btnStart.removeAttribute('disabled');
	refs.btnStart.removeAttribute('style');
	// refs.body.removeAttribute('style');
}

function changeBodyColor() {
	refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
