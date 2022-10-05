import { isArray } from 'lodash';

export { isArray };

export const isArrayHasItem = (items: any) => isArray(items) && items.length;
