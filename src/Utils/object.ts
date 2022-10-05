import { reduce } from 'lodash';

export const parseFilter = (params: any) => {
  if (params?.filter) {
    const { filter, ...restParams } = params
    return { ...restParams, ...filter }
  }
  return params
}

export const json2Form = (jsonObj: any) => reduce(
  jsonObj,
  (result: { append: (arg0: any, arg1: any) => void; }, item: any, key: any) => {
    result.append(key, item);
    return result;
  }, new FormData(),
);

export const convertBodyToFormData = (body: any) => {
  const formData = new FormData()
  Object.keys(body).forEach((prop) => body[prop] && formData.append(prop, body[prop]))
  return formData
}