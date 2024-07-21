import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const initialState = {
  campers: [],
  favorites: [],
  location: '',
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const camperSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (camper) => camper._id !== action.payload
      );
    },
    changeLocation(state, action) {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { addFavorite, removeFavorite, changeLocation } =
  camperSlice.actions;

export const camperReducer = camperSlice.reducer;
