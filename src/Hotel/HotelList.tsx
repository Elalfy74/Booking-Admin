import {
  BooleanField,
  Datagrid,
  EditButton,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  ShowButton,
  TextField,
} from "react-admin";

const HotelList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />

      <NumberField source="cheapestPrice" />

      <ReferenceField source="category" reference="hotel-categories" />
      <ReferenceField source="city" reference="cities" />

      <ImageField source="photos[0]" label="photo" className="object" />
      <NumberField source="noOfStars" label="stars" />

      <BooleanField source="isFeatured" />
      <ShowButton />
    </Datagrid>
  </List>
);

export default HotelList;
