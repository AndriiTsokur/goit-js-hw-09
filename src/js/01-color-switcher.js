import { handleStart, handleStop } from './01/btnOps';

export default refs = {
	btnStart: document.querySelector('[data-start]'),
	btnStop: document.querySelector('[data-stop]'),
};

refs.btnStart.addEventListener('click', handleStart);
refs.btnStop.addEventListener('click', handleStop);
