import React, { useEffect, useState } from "react";
import HotelForm from "./HotelForm";
import { Hotel, City } from "../../models/Hotel";
import { connect } from "react-redux";
import { InitialState } from "../../redux/reducers/initialState";
import * as actions from "../../redux/actions/hotelActions";

interface ManageHotelProps {
  hotels: Hotel[];
  hotel?: Hotel;
  loadHotels: any;
  saveNewHotel: any;
  editHotel: any;
  history: any;
}

const ManageHotel = ({
  hotels,
  loadHotels,
  saveNewHotel,
  editHotel,
  history,
  ...props
}: ManageHotelProps) => {
  let cities: City[] = [
    { id: 1, name: "London" },
    { id: 2, name: "Paris" },
    { id: 3, name: "Berlin" },
    { id: 4, name: "San Francisco" }
  ];

  let currentHotel: Hotel = { ...props.hotel };
  const [hotel, setHotel] = useState(currentHotel);

  useEffect(() => {
    if (hotels.length === 0) {
      loadHotels();
    } else {
      setHotel(props.hotel!);
    }
  }, [props.hotel]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name == "city") {
      let city = cities.find(city => city.id == value);
      setHotel({ ...hotel, [name]: city });
    } else {
      setHotel({ ...hotel, [name]: value });
    }
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    if (hotel.id !== 0) {
      editHotel(hotel).then(history.push("/hotels"));
    } else {
      saveNewHotel(hotel).then(history.push("/hotels"));
    }
  };

  return (
    <HotelForm
      hotel={hotel}
      cities={cities}
      saving={false}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

const mapStateToProps = (state: InitialState, ownProps: any) => {
  const id = parseInt(ownProps.match.params.id, 10);
  let newHotel: Hotel = { id: 0, name: "", address: "", description: "" };
  return {
    hotels: state.hotels,
    hotel: id ? state.hotels.find(hotel => hotel.id == id) : newHotel
  };
};

export default connect(mapStateToProps, actions)(ManageHotel);
