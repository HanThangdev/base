import { isArray } from 'lodash';

export const swap = (arr: any[], index1: number, index2: number) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  return arr
}

export { isArray };

export const isArrayHasItem = (items: any) => isArray(items) && items.length;