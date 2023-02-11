import {
  BooleanField,
  Datagrid,
  EditButton,
  ImageField,
  List,
  ReferenceField,
  TextField,
  useRecordContext,
} from "react-admin";

import { CustomImageField, CustomTitle } from "../components";

export const CityTitle = () => {
  const record = useRecordContext();
  return <CustomTitle title="City" value={record?.name} />;
};

const CityList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="country" reference="countries" />
      <CustomImageField source="photos[0]" label="Photo" />
      <BooleanField source="isFeatured" />
      <EditButton />
    </Datagrid>
  </List>
);

export default CityList;
