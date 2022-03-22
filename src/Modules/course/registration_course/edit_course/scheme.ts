import * as yup from 'yup'

const scheme = () => yup.object().shape({
  name: yup.string().trim(),
  email: yup.string().trim(),
  password: yup.string().trim(),
  role: yup.string().trim(),
})

export default scheme