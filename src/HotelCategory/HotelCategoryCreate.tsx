import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const HotelCategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required />
      <TextInput source="desc" required multiline rows={5} />
    </SimpleForm>
  </Create>
);

export default HotelCategoryCreate;
