/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable block-scoped-var */
/* eslint-disable no-undef */

function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

export const initMovingTabEffect = () => {
	const total = document.querySelectorAll('.nav-pills');

	total.forEach((item, i) => {
		if (item.querySelector('.moving-tab')) {
			item.querySelector('.moving-tab').remove();
		}

		let moving_div = document.createElement('div');
		const first_li = item.querySelector('li .nav-link.active');
		const tab = first_li.cloneNode();
		tab.innerHTML = '-';

		moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
		moving_div.appendChild(tab);

		const list_length = item.getElementsByTagName('li').length;
		const nodes = Array.from(first_li.closest('ul').children);
		const index = nodes.indexOf(first_li.closest('li')) + 1;
		let sum = 0;

		moving_div.style.padding = '0px';
		moving_div.style.width = `${
			item.querySelector('li .nav-link.active').offsetWidth
		}px`;

		if (item.classList.contains('flex-column')) {
			for (var j = 1; j < index; j++) {
				sum += item.querySelector(`li:nth-child(${j})`).offsetHeight;
			}
			moving_div.style.transform = `translate3d(0px,${sum}px, 0px)`;
		} else {
			for (var j = 1; j < index; j++) {
				sum += item.querySelector(`li:nth-child(${j})`).offsetWidth;
			}
			moving_div.style.transform = `translate3d(${sum}px, 0px, 0px)`;
		}

		item.appendChild(moving_div);
		moving_div.style.transition = '.5s ease';

		item.onmouseover = function (event) {
			const target = getEventTarget(event);
			const li = target.closest('li'); // get reference
			if (li) {
				const nodes = Array.from(li.closest('ul').children); // get array
				const index = nodes.indexOf(li) + 1;
				item.querySelector(`li:nth-child(${index}) .nav-link`).onclick =
					function () {
						moving_div = item.querySelector('.moving-tab');
						let sum = 0;
						if (item.classList.contains('flex-column')) {
							for (var j = 1; j <= nodes.indexOf(li); j++) {
								sum += item.querySelector(`li:nth-child(${j})`).offsetHeight;
							}
							moving_div.style.transform = `translate3d(0px,${sum}px, 0px)`;
							moving_div.style.height = item.querySelector(
								`li:nth-child(${j})`
							).offsetHeight;
						} else {
							for (var j = 1; j <= nodes.indexOf(li); j++) {
								sum += item.querySelector(`li:nth-child(${j})`).offsetWidth;
							}
							moving_div.style.transform = `translate3d(${sum}px, 0px, 0px)`;
							moving_div.style.width = `${
								item.querySelector(`li:nth-child(${index})`).offsetWidth
							}px`;
						}
					};
			}
		};
	});
};
