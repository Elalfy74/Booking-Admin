import {
  SimpleForm,
  NumberInput,
  ReferenceInput,
  AutocompleteInput,
  useRecordContext,
  Edit,
} from "react-admin";

const RoomCategoryCreate = () => {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="hotel" reference="hotels">
          <AutocompleteInput disabled />
        </ReferenceInput>

        <RoomInput source="room" />

        <NumberInput source="number" />
      </SimpleForm>
    </Edit>
  );
};

const RoomInput = ({ source }: { source: string }) => {
  const record = useRecordContext();

  return (
    <ReferenceInput source={source} reference={`hotels/rooms/${record.hotel}`}>
      <AutocompleteInput label="Room" optionText="title" />
    </ReferenceInput>
  );
};

export default RoomCategoryCreate;
