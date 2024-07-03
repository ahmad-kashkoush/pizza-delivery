import { getAddress } from "@/services/apiGeocoding";
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  username: '',
  phone: '',
  address: '',
  priority: false
}
const userSlice = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updatePriotity(state, action) {
      state.priority = action.payload;
    },
    createUser(state, action) {
      const { payload } = action;
      state.username = payload.username || '';
      state.phone = payload.phone || '';
      state.address = payload.address || '';
      state.priority = payload.priority || false;
    },


  }

});
// external action creator
export function createUser({ username, phone, priority }) {

  return async function (dispatch) {

    const address = await fetchAddress();

    dispatch({ type: 'user/createUser', payload: { username, phone, priority, address } });
  }
}
const userReducer = userSlice.reducer;
export const getUsername = (store) => store.userReducer.username;
export default userReducer;
export const { updateName } = userSlice.actions;

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
