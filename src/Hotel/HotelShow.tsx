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
        <TextField source="name" />
        <TextField source="desc" />

        <TextField source="address" />
        <NumberField source="distanceToDT" />

        <ReferenceField source="category" reference="hotel-categories" />
        <ReferenceField source="city" reference="cities" />

        <ArrayField source="photos">
          {/* <SingleFieldList> */}
          <TextField source="" />
          {/* </SingleFieldList> */}
        </ArrayField>
        <ImageField source="photos" />
      </SimpleShowLayout>
    </Show>
  );
};

export default HotelShow;
