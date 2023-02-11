import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  AutocompleteInput,
} from "react-admin";

const HotelCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" required />
        <TextInput source="desc" required multiline rows={5} />

        <TextInput source="address" required />
        <NumberInput source="distanceToDT" required min={1} />

        <ReferenceInput source="category" reference="hotel-categories" />

        <ReferenceInput source="city" reference="cities" />

        <ArrayInput source="photos">
          <SimpleFormIterator>
            <TextInput source="" />
          </SimpleFormIterator>
        </ArrayInput>

        <NumberInput source="noOfStars" required min={1} max={5} />

        <ArrayInput source="rooms">
          <SimpleFormIterator inline>
            <TextInput source="title" required />

            <NumberInput source="maxPeople" min={1} required />
            <NumberInput source="beds" min={1} required />

            <TextInput source="desc" required />
            <NumberInput source="currentPrice" min={1} required />

            <ArrayInput source="photos">
              <SimpleFormIterator inline>
                <TextInput source="" />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>

        <BooleanInput source="isFeatured" />
      </SimpleForm>
    </Create>
  );
};

export default HotelCreate;
