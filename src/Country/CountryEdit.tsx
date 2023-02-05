import {
  BooleanInput,
  Edit,
  ImageField,
  SimpleForm,
  TextInput,
} from "react-admin";
import { CountryTitle } from "./CountryList";

const CountryEdit = () => (
  <Edit title={<CountryTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="photo" fullWidth />
      <BooleanInput source="isFeatured" />
    </SimpleForm>
  </Edit>
);

export default CountryEdit;
