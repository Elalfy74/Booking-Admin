import { Datagrid, EditButton, List, TextField } from "react-admin";

const HotelCategoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="desc" />
      <EditButton />
    </Datagrid>
  </List>
);

export default HotelCategoryList;
