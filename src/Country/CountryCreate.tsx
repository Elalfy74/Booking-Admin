import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  ImageField,
} from "react-admin";

const CountryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />

      <TextInput source="photo" fullWidth />

      <BooleanInput source="isFeatured" />
    </SimpleForm>
  </Create>
);

export default CountryCreate;
