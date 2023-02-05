import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const CityCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="country" reference="countries" />
      <ArrayInput source="photos">
        <SimpleFormIterator fullWidth>
          <TextInput source="" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput source="isFeatured" />
    </SimpleForm>
  </Create>
);

export default CityCreate;
