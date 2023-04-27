import { handleStart, handleStop } from './01/btnOps';

const refs = {
	btnStart: document.querySelector('[data-start]'),
	btnStop: document.querySelector('[data-stop]'),
};

refs.btnStart.addEventListener('click', handleStart);
refs.btnStop.addEventListener('click', handleStop);

export default refs;
