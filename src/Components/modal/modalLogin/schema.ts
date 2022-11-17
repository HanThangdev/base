import { errorForm } from '@constants';
import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup.string().email(errorForm.INVALID_EMAIL).required(errorForm.REQUIRED).max(76, errorForm.CHAR_MAX_76).trim(),
}).required();