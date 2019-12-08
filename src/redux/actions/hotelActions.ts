import * as actionTypes from "./hotelactionTypes";
import { Hotel, City } from "../../../src/models/Hotel";
import _ from "lodash";

let hotels: Hotel[] = [
  {
    id: 1,
    name: "Hotel A",
    address: "Address A",
    description: "Description A",
    city: { id: 1, name: "London" },
    raiting: 3
  },
  {
    id: 2,
    name: "Hotel B",
    address: "Address B",
    description: "Description B",
    city: { id: 2, name: "Paris" },
    raiting: 4
  }
];

export function loadHotelsSuccess(hotels: Hotel[]) {
  return { type: actionTypes.LOAD_HOTELS_SUCCESS, hotels };
}

export function saveHotelSuccess(hotel: Hotel) {
  return { type: actionTypes.SAVE_HOTEL_SUCCESS, hotel };
}

export function editHotelSuccess(hotel: Hotel) {
  return { type: actionTypes.EDIT_HOTEL_SUCCESS, hotel };
}

export function deleteHotelSuccess(hotelId: number) {
  return { type: actionTypes.DELETE_HOTEL_SUCCESS, hotelId };
}

export function loadHotels() {
  return function(dispatch: any) {
    dispatch(loadHotelsSuccess(hotels));
  };
}

export function saveHotel(hotel: Hotel) {
  return function(dispatch: any) {
    if (hotel.id) {
      //edit
      hotels = hotels.map(h => (h.id == hotel.id ? hotel : h));
      dispatch(editHotelSuccess(hotel));
    } else {
      //save
      hotels = [...hotels, { ...hotel }];
      dispatch(saveHotelSuccess(hotel));
    }
  };
}

export function deleteHotel(hotelId: number) {
  return function(dispatch: any) {
    hotels = hotels.filter(h => h.id !== hotelId);
    dispatch(deleteHotelSuccess(hotelId));
  };
}
