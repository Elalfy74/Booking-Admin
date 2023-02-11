import {
  ArrayInput,
  ArrayInputProps,
  ImageField,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ArrayInputImages = () => {
  return (
    <ArrayInput source="photos">
      <SimpleFormIterator fullWidth inline>
        <TextInput source="" fullWidth />
        {/* <ImageField source="" /> */}
      </SimpleFormIterator>
    </ArrayInput>
  );
};
