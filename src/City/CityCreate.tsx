import {
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { ArrayInputImages } from "../components";

const CityCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="country" reference="countries" />
      <ArrayInputImages />
      <BooleanInput source="isFeatured" />
    </SimpleForm>
  </Create>
);

export default CityCreate;
