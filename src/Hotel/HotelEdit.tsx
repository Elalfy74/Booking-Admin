import {
  ArrayInput,
  BooleanInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextField,
  TextInput,
} from "react-admin";

const HotelEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" required fullWidth />
      <TextInput source="desc" required multiline rows={5} fullWidth />

      <TextInput source="address" required fullWidth />
      <NumberInput source="distanceToDTInKm" required min={1} />

      <TextInput source="category" required />
      <ReferenceInput source="city" reference="cities" required />

      <ArrayInput source="photos">
        <SimpleFormIterator>
          <TextInput source="" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="features">
        <SimpleFormIterator>
          <TextInput source="" />
        </SimpleFormIterator>
      </ArrayInput>

      <NumberInput source="stars" required min={1} max={5} />

      <ArrayInput source="rooms">
        <SimpleFormIterator>
          <TextInput source="title" required />

          <NumberInput source="maxPeople.adults" min={1} required />
          <NumberInput source="maxPeople.children" min={1} required />

          <TextInput source="beds" required />

          <NumberInput source="currentPrice" min={1} required />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="reviews">
        <SimpleFormIterator>
          <TextInput source="user" fullWidth />
          <NumberInput source="rate" />
          <TextInput source="body" fullWidth />
        </SimpleFormIterator>
      </ArrayInput>

      <BooleanInput source="isFeatured" />
    </SimpleForm>
  </Edit>
);

export default HotelEdit;
