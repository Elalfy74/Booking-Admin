import { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
} from "react-admin";

const RoomCategoryCreate = () => {
  const [hotel, setHotel] = useState("");

  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="hotel" reference="hotels">
          <AutocompleteInput onChange={(value) => setHotel(value)} />
        </ReferenceInput>

        {hotel ? (
          <ReferenceInput source="room" reference={`hotels/rooms/${hotel}`}>
            <AutocompleteInput label="Room" optionText="title" />
          </ReferenceInput>
        ) : (
          <AutocompleteInput source="" label="Room" disabled />
        )}

        <NumberInput source="number" />
      </SimpleForm>
    </Create>
  );
};

export default RoomCategoryCreate;
