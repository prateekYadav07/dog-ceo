import { createSelector } from "reselect";

const selectDog = (state) => state.dog;

export const selectDogsCollections = createSelector(
  [selectDog],
  (dog) => dog.dogsCollection
);

export const selectIsDogCollectionLoading = createSelector(
  [selectDog],
  (dog) => !dog.dogsCollection
);

export const selectBreeds = createSelector([selectDog], (dog) => dog.breeds);
