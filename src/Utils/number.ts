import { MILION_UNIT } from "@constants";

export function convertToRawNumber(value: any) {
	return value.replace(/,/g, '');
}

export function roundDown(value: string | number, number: number) {
	return `${Math.floor(+value * 10 ** number) / 10 ** number}`;
}

export const convertTimeToNumber = (time = '00:00:00') => {
	const arrTime = time.split(':').map((item) => parseInt(item, 10));
	const [hour, minutes, seconds] = arrTime;
	return hour * 3600 + minutes * 60 + seconds;
};

export function sum(a: number, b: number) {
	return a + b;
}

export const formatFundSize = (
	value: number,
	typeCurrentcy: string = 'en-US'
) => {
	const total = Intl.NumberFormat(typeCurrentcy);
	if (value > MILION_UNIT) {
		const values = value / MILION_UNIT;
		return `${total.format(values)}M`;
	}
	return total.format(value);
};

export const formatCurrentcy = (
	value: number,
	typeCurrentcy: string = 'en-US'
) => {
	const total = Intl.NumberFormat(typeCurrentcy, { minimumFractionDigits: 2 });
	return total.format(value);
};
