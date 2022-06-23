/**
 * 
 */

$(document).ready(function() {

	const question1 = document.querySelector('.question1');
	const content1 = document.querySelector('.content1');

	let isHidden = true;

	question1.addEventListener('click', () => {
		if (isHidden) {
			// 안보일 때
			isHidden = false;
			content1.style.display = 'block';
		} else {
			// 보일 때
			isHidden = true;
			content1.style.display = 'none';
		}
	});

});

$(document).ready(function() {

	const question2 = document.querySelector('.question2');
	const content2 = document.querySelector('.content2');

	let isHidden = true;

	question2.addEventListener('click', () => {
		if (isHidden) {
			// 안보일 때
			isHidden = false;
			content2.style.display = 'block';
		} else {
			// 보일 때
			isHidden = true;
			content2.style.display = 'none';
		}
	});

});

$(document).ready(function() {

	const question3 = document.querySelector('.question3');
	const content3 = document.querySelector('.content3');

	let isHidden = true;

	question3.addEventListener('click', () => {
		if (isHidden) {
			// 안보일 때
			isHidden = false;
			content3.style.display = 'block';
		} else {
			// 보일 때
			isHidden = true;
			content3.style.display = 'none';
		}
	});

});

$(document).ready(function() {

	const question4 = document.querySelector('.question4');
	const content4 = document.querySelector('.content4');

	let isHidden = true;

	question4.addEventListener('click', () => {
		if (isHidden) {
			// 안보일 때
			isHidden = false;
			content4.style.display = 'block';
		} else {
			// 보일 때
			isHidden = true;
			content4.style.display = 'none';
		}
	});

});

$(document).ready(function() {

	const question5 = document.querySelector('.question5');
	const content5 = document.querySelector('.content5');

	let isHidden = true;

	question5.addEventListener('click', () => {
		if (isHidden) {
			// 안보일 때
			isHidden = false;
			content5.style.display = 'block';
		} else {
			// 보일 때
			isHidden = true;
			content5.style.display = 'none';
		}
	});

});