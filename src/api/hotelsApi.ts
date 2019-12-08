import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://localhost:5001/api/hotels";
import { Hotel } from "../models/Hotel";

export function getHotels() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveHotel(hotel: Hotel) {
  return fetch(baseUrl + (hotel.id || ""), {
    method: hotel.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hotel)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteHotel(hotelId: number) {
  return fetch(baseUrl + hotelId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
