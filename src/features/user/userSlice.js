import { getAddress } from "@/services/apiGeocoding";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



// create action creator with createAsyncThunk
export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
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
)
const initalState = {
  username: '',
  phone: '',
  address: '',
  position: {},
  priority: false,
  status: 'idle'
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
  },
  // Connect reducer with thunk here
  extraReducers: (builder) => builder.addCase(fetchAddress.pending, (state) => {
    state.status = 'loading'
  }).addCase(fetchAddress.fulfilled, (state, action) => {
    state.status = 'idle';
    state.position = action.payload.position,
      state.address = action.payload.address;
  }).addCase(fetchAddress.rejected, (state, action) => {
    state.status = 'Error';
    state.error = action.error.message;
  })

});
const userReducer = userSlice.reducer;
export const getUsername = (store) => store.userReducer.username;
export const getAddresss = (store) => store.userReducer.address;
export default userReducer;
export const { updateName, createUser } = userSlice.actions;

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


// external action creator
// export function createUser({ username, phone, priority }) {

//   return async function (dispatch) {

//     const address = await fetchAddress();

//     dispatch({ type: 'user/createUser', payload: { username, phone, priority, address } });
//   }
// }