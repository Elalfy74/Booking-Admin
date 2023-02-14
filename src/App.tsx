import { Admin, Resource } from "react-admin";

import simpleRestProvider from "./dataProvide";
import { authProvider } from "./authProvider";

import { CityCreate, CityEdit, CityList } from "./City";
import { CountryList, CountryEdit, CountryCreate } from "./Country";

import { HotelList, HotelEdit, HotelCreate, HotelShow } from "./Hotel";

import { RoomUnitEdit, RoomUnitCreate, RoomUnitList } from "./RoomUnit";

import { CustomLayout } from "./components/CustomLayout";

const dataProvider = simpleRestProvider(import.meta.env.VITE_BACKEND_URL);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={CustomLayout}
    requireAuth
  >
    <Resource
      name="countries"
      list={CountryList}
      edit={CountryEdit}
      create={CountryCreate}
      recordRepresentation="name"
    />

    <Resource
      name="cities"
      list={CityList}
      edit={CityEdit}
      create={CityCreate}
      recordRepresentation="name"
    />

    <Resource
      name="hotels"
      list={HotelList}
      show={HotelShow}
      edit={HotelEdit}
      create={HotelCreate}
      recordRepresentation="name"
    />

    <Resource
      name="room-units"
      list={RoomUnitList}
      edit={RoomUnitEdit}
      create={RoomUnitCreate}
    />
  </Admin>
);

export default App;
