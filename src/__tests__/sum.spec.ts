import { sum } from '@utils/number';

describe('Sum', () => {
	it('sum two numbers', () => {
		expect(sum(1, 1)).toEqual(2);
	});
});
