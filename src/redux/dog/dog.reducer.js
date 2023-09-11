import dogFetchActionTypes from "./dog.types";

const INITIAL_STATE = {
  dogsCollection: null,
  errorMessage: undefined,
  isFetching: false,
  isBreedFetching: false,
  breeds: null,
};

export const dogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dogFetchActionTypes.FETCH_DOG_START:
      return {
        ...state,
        isFetching: true,
      };
    case dogFetchActionTypes.FETCH_DOG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dogsCollection: action.payload,
      };
    case dogFetchActionTypes.FETCH_DOG_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case dogFetchActionTypes.FETCH_BREEDS_START:
      return {
        ...state,
        isBreedFetching: true,
      };
    case dogFetchActionTypes.FETCH_BREEDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        breeds: action.payload,
      };
    case dogFetchActionTypes.FETCH_BREEDS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
