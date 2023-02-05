import { Datagrid, EditButton, List, TextField } from "react-admin";

const RoomCategoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export default RoomCategoryList;
