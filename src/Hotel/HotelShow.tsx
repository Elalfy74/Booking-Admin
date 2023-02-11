import {
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  DateField,
  NumberField,
  ReferenceField,
  ArrayField,
  SimpleFormIterator,
  ImageField,
  SingleFieldList,
  Datagrid,
} from "react-admin";

const HotelShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="name" fullWidth />
        <TextField source="desc" fullWidth />

        <NumberField source="cheapestPrice" />

        <TextField source="address" />
        <NumberField source="distanceToDT" />

        <TextField source="category" />
        <ReferenceField source="city" reference="cities" />

        <ArrayField source="photos">
          <TextField source="" />
        </ArrayField>
      </SimpleShowLayout>
    </Show>
  );
};

export default HotelShow;
