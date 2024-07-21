import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = (state) => state.camper.campers;
export const selectFavorites = (state) => state.camper.favorites;
export const selectLocation = (state) => state.camper.location;
export const selectIsLoading = (state) => state.camper.isLoading;
export const selectError = (state) => state.camper.error;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation],
  (campers, filter) => {
    if (filter.length > 0) {
      return campers.filter(({ location }) =>
        location.toLowerCase().includes(filter.trim().toLowerCase())
      );
    }

    return campers;
  }
);
