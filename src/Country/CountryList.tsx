import {
  BooleanField,
  Datagrid,
  EditButton,
  List,
  TextField,
} from "react-admin";

import { useRecordContext } from "react-admin";
import { CustomImageField, CustomTitle } from "../components";

export const CountryTitle = () => {
  const record = useRecordContext();
  return <CustomTitle title="Country" value={record?.name} />;
};

const CountryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <CustomImageField source="photo" />
      <BooleanField source="isFeatured" />
      <EditButton />
    </Datagrid>
  </List>
);

export default CountryList;
