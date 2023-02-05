import {
  BooleanField,
  Datagrid,
  EditButton,
  ImageField,
  List,
  TextField,
} from "react-admin";

import { useRecordContext } from "react-admin";
import { CustomTitle } from "../components/CustomTitle";

export const CountryTitle = () => {
  const record = useRecordContext();
  return <CustomTitle title="Country" value={record.name} />;
};

const CountryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ImageField source="photo" className="object" />
      <BooleanField source="isFeatured" />
      <EditButton />
    </Datagrid>
  </List>
);

export default CountryList;
