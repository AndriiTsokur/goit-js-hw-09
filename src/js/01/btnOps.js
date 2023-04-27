import refs from '../01-color-switcher';
import changeBodyColor from './colorOps';

let intervalId = null;

export function handleStart() {
	refs.btnStart.setAttribute('disabled', true);
	refs.btnStart.setAttribute('style', 'opacity:0.5; cursor:not-allowed');
	refs.btnStart.classList.add('active');

	refs.btnStop.removeAttribute('class');

	intervalId = setInterval(changeBodyColor, 1000);
}

export function handleStop() {
	clearInterval(intervalId);

	refs.btnStart.removeAttribute('disabled');
	refs.btnStart.removeAttribute('style');
	refs.btnStart.removeAttribute('class');

	refs.btnStop.classList.add('active');
}
