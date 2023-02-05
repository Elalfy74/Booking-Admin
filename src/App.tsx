import { Admin, Resource } from "react-admin";

import simpleRestProvider from "./dataProvide";

import { CityCreate, CityEdit, CityList } from "./City";
import { CountryList, CountryEdit, CountryCreate } from "./Country";
import {
  RoomCategoryList,
  RoomCategoryEdit,
  RoomCategoryCreate,
} from "./RoomCategory";

import {
  HotelCategoryList,
  HotelCategoryEdit,
  HotelCategoryCreate,
} from "./HotelCategory";

import { HotelList, HotelEdit, HotelCreate, HotelShow } from "./Hotel";
import { authProvider } from "./authProvider";
import { CustomLayout } from "./components/CustomLayout";
import RoomUnitCreate from "./RoomUnit/RoomUnitCreate";
import RoomUnitList from "./RoomUnit/RoomUnitList";

const dataProvider = simpleRestProvider(import.meta.env.VITE_BACKEND_URL);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={CustomLayout}
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

    {/* <Resource
      name="room-categories"
      list={RoomCategoryList}
      edit={RoomCategoryEdit}
      create={RoomCategoryCreate}
      recordRepresentation="name"
    /> */}

    <Resource
      name="hotel-categories"
      list={HotelCategoryList}
      edit={HotelCategoryEdit}
      create={HotelCategoryCreate}
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
      // edit={HotelEdit}
      create={RoomUnitCreate}
    />
  </Admin>
);

export default App;
