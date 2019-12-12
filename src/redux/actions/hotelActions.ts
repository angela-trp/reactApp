import * as actionTypes from "./hotelactionTypes";
import { Hotel } from "../../../src/models/Hotel";
import * as hotelApi from "../../api/hotelsApi";

// export function loadHotelsSuccess(hotels: Hotel[]) {
//   return { type: actionTypes.LOAD_HOTELS_SUCCESS, hotels };
// }

export const loadHotelsSuccess = (hotels: Hotel[]) => ({
  type: actionTypes.LOAD_HOTELS_SUCCESS,
  hotels
});

export function saveHotelSuccess(hotel: Hotel) {
  return { type: actionTypes.SAVE_HOTEL_SUCCESS, hotel };
}

export function editHotelSuccess(hotel: Hotel) {
  return { type: actionTypes.EDIT_HOTEL_SUCCESS, hotel };
}

export function deleteHotelSuccess(hotelId: number) {
  return { type: actionTypes.DELETE_HOTEL_SUCCESS, hotelId };
}

export function apiCallStarted() {
  return { type: actionTypes.API_CALL_STARTED };
}

export function apiCallEnded() {
  return { type: actionTypes.API_CALL_ENDED };
}

// export function loadHotels() {
//   return function(dispatch: any) {

//   };
// }

export const loadHotels = () => (dispatch: any) => {
  hotelApi
    .getHotels()
    .then(hotels => {
      dispatch(loadHotelsSuccess(hotels));
    })
    .catch(error => {
      throw error;
    });
};

export function saveNewHotel(hotel: Hotel) {
  return function(dispatch: any) {
    return hotelApi
      .saveNewHotel(hotel)
      .then(savedHotel => {
        dispatch(saveHotelSuccess(savedHotel));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function editHotel(hotel: Hotel) {
  return function(dispatch: any) {
    return hotelApi
      .updateHotel(hotel)
      .then(updatedHotel => {
        dispatch(editHotelSuccess(updatedHotel));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteHotel(hotelId: number) {
  return function(dispatch: any) {
    return hotelApi
      .deleteHotel(hotelId)
      .then(() => {
        dispatch(deleteHotelSuccess(hotelId));
      })
      .catch(error => {
        throw error;
      });
  };
}
