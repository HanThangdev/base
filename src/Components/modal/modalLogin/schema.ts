import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email('Invalid Email').required("Email is required"),
}).required();