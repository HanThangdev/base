import * as yup from 'yup';

export const validationSchema = yup.object({
  fullname: yup.string().required("Full name is required"),
  email: yup.string().email('Invalid Email').required("Email is required"),
  content: yup.string().required("Content is required"),
}).required();