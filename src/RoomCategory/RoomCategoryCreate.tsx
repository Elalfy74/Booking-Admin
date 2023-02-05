import { Create, SimpleForm, TextInput } from "react-admin";

const RoomCategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
    </SimpleForm>
  </Create>
);

export default RoomCategoryCreate;
