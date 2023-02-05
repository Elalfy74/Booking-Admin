import { Edit, SimpleForm, TextField, TextInput } from "react-admin";

const HotelCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="desc" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export default HotelCategoryEdit;
