import dogFetchActionTypes from "./dog.types";

export const fetchDogCollectionStart = () => ({
  type: dogFetchActionTypes.FETCH_DOG_START,
});

export const fetchDogCollectionFailure = (message) => ({
  type: dogFetchActionTypes.FETCH_DOG_FAILURE,
  payload: message,
});

export const fetchDogCollectionSuccess = (dogsCollection) => ({
  type: dogFetchActionTypes.FETCH_DOG_SUCCESS,
  payload: dogsCollection,
});

export const fetchDogCollectionAsync = () => {
  return (dispatch) => {
    const dogCollectionPromise = fetch(
      "https://dog.ceo/api/breeds/image/random/10"
    );
    dispatch(fetchDogCollectionStart());

    dogCollectionPromise
      .then((res) => res.json())
      .then(async (res) => {
        const dogCollection = res["message"];
        const collection = dogCollection.reduce((accDogColl, item, index) => {
          const arr = item.split("/");
          const breedName = arr[arr.length - 2];
          accDogColl.push({ id: index, breed: breedName, img: item });
          return accDogColl;
        }, []);
        dispatch(fetchDogCollectionSuccess(collection));
      })
      .catch((error) => dispatch(fetchDogCollectionFailure(error.message)));
  };
};

export const fetchBreedsStart = () => ({
  type: dogFetchActionTypes.FETCH_BREEDS_START,
});

export const fetchBreedsFailure = (message) => ({
  type: dogFetchActionTypes.FETCH_BREEDS_FAILURE,
  payload: message,
});

export const fetchBreedsSuccess = (breeds) => ({
  type: dogFetchActionTypes.FETCH_BREEDS_SUCCESS,
  payload: breeds,
});

export const fetchBreedsAsync = () => {
  return (dispatch) => {
    const breedsPromise = fetch("https://dog.ceo/api/breeds/list/all");
    dispatch(fetchBreedsStart);

    breedsPromise
      .then((res) => res.json())
      .then(async (res) => {
        const breedsCollection = res["message"];
        dispatch(fetchBreedsSuccess(breedsCollection));
      })
      .catch((error) => dispatch(fetchBreedsFailure(error.message)));
  };
};
