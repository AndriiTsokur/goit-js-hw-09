import { Notify } from 'notiflix/build/notiflix-notify-aio';

const notifyOptions = {
	timeout: 6000,
};

const refs = {
	form: document.querySelector('.form'),
	delay: document.querySelector('[name="delay"]'),
	step: document.querySelector('[name="step"]'),
	amount: document.querySelector('[name="amount"]'),
};

let FIRST_DELAY = null;
let totalDelay = null;

refs.form.addEventListener('change', setInputValues);

refs.form.addEventListener('submit', launchPromises);

function setInputValues(e) {
	e.target.setAttribute('value', e.target.value);
}

function launchPromises(e) {
	e.preventDefault();
	FIRST_DELAY = Number(refs.delay.value);

	for (let i = 1; i <= Number(refs.amount.value); i++) {
		totalDelay = i === 1 ? FIRST_DELAY : totalDelay + Number(refs.step.value);
		createPromise(i, totalDelay)
			.then(result => Notify.success(result, notifyOptions))
			.catch(result => Notify.failure(result, notifyOptions));
	}
}

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve(`Fulfilled promise ${position} in ${delay}ms`);
			} else {
				reject(`Rejected promise ${position} in ${delay}ms`);
			}
		}, delay);
	});
}
