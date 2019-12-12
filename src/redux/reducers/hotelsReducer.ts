import * as types from "../actions/hotelactionTypes";
import { HotelsState } from "../../models/Hotel";

let initState: HotelsState = { hotels: [], loading: false };

export default function hotelReducer(state = initState, action: any) {
  switch (action.type) {
    case types.LOAD_HOTELS_SUCCESS:
      return { ...state, hotels: action.hotels, loading: false };
    case types.SAVE_HOTEL_SUCCESS:
      let hotels = [...state.hotels, { ...action.hotel }];
      return { ...state, hotels };
    case types.EDIT_HOTEL_SUCCESS:
      let updatedHotels = state.hotels.map(hotel =>
        hotel.id == action.hotel.id ? action.hotel : hotel
      );
      return { ...state, hotels: updatedHotels };
    case types.DELETE_HOTEL_SUCCESS:
      return {
        ...state,
        hotels: state.hotels.filter(hotel => hotel.id !== action.hotelId)
      };
    case types.API_CALL_STARTED:
      return { ...state, loading: true };
    case types.API_CALL_ENDED:
      return { ...state, loading: false };
    default:
      return state || initState;
  }
}
