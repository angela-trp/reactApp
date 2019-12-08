import * as types from "../actions/hotelactionTypes";
import { InitialState } from "./initialState";
import { Hotel } from "../../models/Hotel";

let hotels: Hotel[] = [];

export default function courseReducer(state: Hotel[], action: any) {
  switch (action.type) {
    case types.LOAD_HOTELS_SUCCESS:
      return action.hotels;
    case types.SAVE_HOTEL_SUCCESS:
      return [...state, { ...action.hotel }];
    case types.EDIT_HOTEL_SUCCESS:
      return state.map(hotel =>
        hotel.id == action.hotel.id ? action.hotel : hotel
      );
    case types.DELETE_HOTEL_SUCCESS:
      return state.filter(hotel => hotel.id !== action.hotelId);
    default:
      return state || hotels;
  }
}
