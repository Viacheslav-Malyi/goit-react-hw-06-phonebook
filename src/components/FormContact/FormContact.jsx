import { Label, Input, Button, FormWrapper } from './Form.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
export const FormContact = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormWrapper>
        <Label>
          Name
          <Input type="text" name="name" />
        </Label>
        <Label>
          Number
          <Input type="text" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormWrapper>
    </Formik>
  );
};
