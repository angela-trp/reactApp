import * as React from "react";
import { Hotel } from "../../models/Hotel";
import { Link } from "react-router-dom";

interface HotelListProps {
  hotels: Hotel[];
  onDeleteClick: any;
}

const HotelsList = ({ hotels, onDeleteClick }: HotelListProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Description</th>
          <th>City</th>
          <th>Raiting</th>
        </tr>
      </thead>
      <tbody>
        {hotels.map(hotel => {
          return (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.address}</td>
              <td>{hotel.description}</td>
              <td>{hotel.city ? hotel.city.name : ""}</td>
              <td>{hotel.raiting}</td>
              <td>
                <Link
                  className="btn btn-outline-warning"
                  to={"/hotel/" + hotel.id}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(hotel.id)}
                >
                  {" "}
                  Delete{" "}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HotelsList;
