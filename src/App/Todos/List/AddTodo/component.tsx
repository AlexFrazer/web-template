import * as React from 'react';
import { Form, Field, FormikProps } from 'formik';
import { addTodo } from '../../actions';

export interface FormValues {
  readonly title: string;
}

export interface Props extends FormikProps<FormValues> {
  addTodo: typeof addTodo;
}

const AddTodo: React.SFC<Props> = () => (
  <Form>
    <Field autoComplete="off" name="title" />
    <button type="submit">Submit</button>
  </Form>
);

export default AddTodo;
