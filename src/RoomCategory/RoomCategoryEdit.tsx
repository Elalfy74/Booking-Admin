import { Edit, SimpleForm, TextInput } from "react-admin";

const RoomCategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" required />
    </SimpleForm>
  </Edit>
);

export default RoomCategoryEdit;
