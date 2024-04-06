import {
  LISTING_LIST_FAIL,
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
} from "../Types/listingTypes";

export const listingListReducer = (state = { listing: [] }, action) => {
  switch (action.type) {
    case LISTING_LIST_REQUEST:
      return { loading: true, listing: [] };
    case LISTING_LIST_SUCCESS:
      return { loading: false, listing: action.payload };
    case LISTING_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

