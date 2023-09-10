import { createSelector } from "reselect";

const selectDog = (state) => state.dog;

export const selectDogsCollections = createSelector(
  [selectDog],
  (dog) => dog.dogsCollection
);
