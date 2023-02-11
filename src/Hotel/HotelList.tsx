import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  ShowButton,
  TextField,
} from "react-admin";
import { CustomImageField } from "../components";

const HotelList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />

      <NumberField source="cheapestPrice" />

      <TextField source="category" />

      <ReferenceField source="city" reference="cities" />

      <CustomImageField source="photos[0]" label="Photo" />
      <NumberField source="stars" label="stars" />

      <BooleanField source="isFeatured" />
      <ShowButton />
    </Datagrid>
  </List>
);

export default HotelList;
