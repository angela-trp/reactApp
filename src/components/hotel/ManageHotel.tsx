import React, { useEffect, useState } from "react";
import HotelForm from "./HotelForm";
import { Hotel, City, ValidationErrors, HotelsState } from "../../models/Hotel";
import { connect } from "react-redux";
import { InitialState } from "../../redux/reducers/initialState";
import * as actions from "../../redux/actions/hotelActions";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

interface ManageHotelProps {
  hotels: Hotel[];
  hotel?: Hotel;
  loadHotels: any;
  saveNewHotel: any;
  editHotel: any;
  history: any;
  loading: boolean;
}

const ManageHotel = ({
  hotels,
  loadHotels,
  saveNewHotel,
  editHotel,
  history,
  loading,
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
  let errorsObject: ValidationErrors = { isInvalid: false };
  const [errors, setErrors] = useState(errorsObject);
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
    if (!formIsValid()) return;
    if (hotel.id !== 0) {
      editHotel(hotel).then(() => {
        toast.success("Hotel edited.");
        history.push("/hotels");
      });
    } else {
      saveNewHotel(hotel).then(() => {
        toast.success("Hotel saved.");
        history.push("/hotels");
      });
    }
  };

  function formIsValid(): boolean {
    let errors: ValidationErrors = { isInvalid: false };
    if (!hotel.name) {
      errors.name = "Name is required";
      errors.isInvalid = true;
    }
    if (!hotel.address) {
      errors.address = "Address is required";
      errors.isInvalid = true;
    }
    if (!hotel.description) {
      errors.description = "Description is required";
      errors.isInvalid = true;
    }
    if (!hotel.city) {
      errors.city = "City is required";
      errors.isInvalid = true;
    }

    if (errors.isInvalid) {
      setErrors(errors);
    }
    return !errors.isInvalid;
  }

  return loading ? (
    <Spinner />
  ) : (
    <HotelForm
      hotel={hotel}
      cities={cities}
      saving={false}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
};

const mapStateToProps = (state: InitialState, ownProps: any) => {
  let hotelManagement = state.hotelsManagement;
  const id = parseInt(ownProps.match.params.id, 10);
  let newHotel: Hotel = { id: 0, name: "", address: "", description: "" };
  return {
    hotels: hotelManagement.hotels,
    hotel:
      id && hotelManagement.hotels.length > 0
        ? hotelManagement.hotels.find(hotel => hotel.id == id)
        : newHotel,
    loading: hotelManagement.loading
  };
};

export default connect(mapStateToProps, actions)(ManageHotel);
