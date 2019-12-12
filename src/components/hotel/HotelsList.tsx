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
      <thead className="thead-light">
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Description</th>
          <th>City</th>
          <th>Raiting</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {hotels !== undefined &&
          hotels.map(hotel => {
            return (
              <tr key={hotel.id}>
                <td>{hotel.name}</td>
                <td>{hotel.address}</td>
                <td>{hotel.description}</td>
                <td>{hotel.city ? hotel.city.name : ""}</td>
                <td>{hotel.raiting}</td>
                <td>
                  <div className="btn-group">
                    <Link
                      className="btn btn-outline-warning btn-md"
                      to={"/hotel/" + hotel.id}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-outline-danger btn-md"
                      onClick={() => onDeleteClick(hotel.id)}
                    >
                      {""}Delete{""}
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default HotelsList;
