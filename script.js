'use strict';

const dayTimer = document.querySelector('.day-timer');
const labelTimer = document.querySelector('.timer');
const mainTimer = document.querySelector('.maintenance-timer');

const maintenaceTimer = function () {
	let timer;
	const timerMain = function () {
		// const date_1 = new Date('Jan 17, 2023 17:00:00').getTime();
		// const date_2 = new Date('Jan 17, 2023 22:00:00').getTime();
		const date_1 = new Date().getTime();
		const date_2 = new Date('Dec 14, 2022 17:46:00').getTime();

		const differenceTime = date_2 - date_1;
		const hours = String(
			Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		).padStart(2, 0);
		const minutes = String(
			Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60))
		).padStart(2, 0);
		const seconds = String(
			Math.floor((differenceTime % (1000 * 60)) / 1000)
		).padStart(2, 0);

		mainTimer.textContent = `${hours}:${minutes}:${seconds}`;

		if (differenceTime < 0) {
			clearInterval(timer);
			mainTimer.textContent = `00:00:00`;
			console.log('NOW ENDED');
		}
	};
	timerMain();

	timer = setInterval(timerMain, 1000);
	return timer;
};

const countDownTimer = function () {
	let timer;
	const tick = function () {
		const countDownDate = new Date('Jan 17, 2023 17:00:00').getTime();
		// const countDownDate = new Date('Dec 14, 2022 17:45:00').getTime();

		// Get today's date and time
		const now = new Date().getTime();

		// Find the distance between now and the count down date
		const distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		labelTimer.textContent =
			days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
		dayTimer.textContent = `${days} days till Genshin Impact goes into maintenace`;

		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(timer);
			// clearTimeout(tick);
			console.log('ENDED');
			labelTimer.textContent = 0 + 'd ' + 0 + 'h ' + 0 + 'm ' + 0 + 's ';
			dayTimer.textContent = `0 days till Genshin Impact goes into maintenace`;
			maintenaceTimer();
		}
	};
	tick();

	timer = setInterval(tick, 1000);
	return timer;
};

countDownTimer();
