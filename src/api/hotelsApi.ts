import { handleResponse, handleError } from "./apiUtils";
import { Hotel } from "../models/Hotel";

const baseUrl = "http://localhost:4000/hotels/";

export function getHotels() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function updateHotel(hotel: Hotel) {
  return fetch(baseUrl + hotel.id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hotel)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveNewHotel(hotel: Hotel) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hotel)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteHotel(hotelId: number) {
  return fetch(baseUrl + hotelId, {
    method: "DELETE",
    headers: { "content-type": "application/json" }
  })
    .then(handleResponse)
    .catch(handleError);
}
