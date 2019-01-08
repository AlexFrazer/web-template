import * as Yup from 'yup';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormik, FormikProps } from 'formik';
import { addTodo } from 'src/App/Todos/actions';
import component, { Props, FormValues } from './component';

type OwnProps = Diff<Props, FormikProps<FormValues>>;

export default compose<Props, {}>(
  connect(
    null,
    { addTodo },
  ),
  /**
   * Form schema and validation.
   */
  withFormik<OwnProps, FormValues>({
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(2)
        .required('Title is required'),
    }),
    mapPropsToValues: () => ({ title: '' }),
    handleSubmit: ({ title }, { resetForm, props: { addTodo } }) => {
      addTodo({ title });
      resetForm();
    },
  }),
)(component);
