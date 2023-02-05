import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
  useRecordContext,
} from "react-admin";

const RoomUnitList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="number" />

        <ReferenceField source="hotel" reference="hotels" />

        <RoomField source="room" />

        <EditButton />
      </Datagrid>
    </List>
  );
};

export const RoomField = ({ source }: { source: string }) => {
  const record = useRecordContext();

  return (
    <ReferenceField source={source} reference={`hotels/rooms/${record.hotel}`}>
      <TextField source="title" />
    </ReferenceField>
  );
};

export default RoomUnitList;
