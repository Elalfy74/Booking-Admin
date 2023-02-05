import {
  ArrayInput,
  BooleanInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
import { CityTitle } from "./CityList";

const CityEdit = () => (
  <Edit title={<CityTitle />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceInput source="country" reference="countries" />
      <ArrayInput source="photos">
        <SimpleFormIterator fullWidth>
          <TextInput source="" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput source="isFeatured" />
    </SimpleForm>
  </Edit>
);

export default CityEdit;
