import * as yup from 'yup';

const todoValidationSchema = yup.object().shape({
  title: yup.string().required('Title cannot be empty'),
  description: yup.string().required('Description cannot be empty')
});

export default todoValidationSchema;
