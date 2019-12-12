import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import {
  Hotel,
  City,
  SelectMenuItem,
  ValidationErrors
} from "../../models/Hotel";

interface HotelFormProps {
  hotel: Hotel;
  cities: City[];
  onSave: any;
  onChange: any;
  saving: boolean;
  errors: ValidationErrors;
}
const HotelForm = ({
  hotel,
  cities,
  onSave,
  onChange,
  saving = false,
  errors
}: HotelFormProps) => {
  let selectMenuItems: SelectMenuItem[] =
    cities.length > 0
      ? cities.map(city => ({
          value: city.id!,
          text: city.name
        }))
      : [];

  return (
    <div className={"container"}>
      <form onSubmit={onSave} className={"col-md-4 col-md-offset-6"}>
        <h2>{hotel.id ? "Edit" : "Add"} Hotel</h2>
        <TextInput
          name="name"
          label="Name"
          value={hotel.name || ""}
          onChange={onChange}
          error={errors.name}
        />
        <TextInput
          name="address"
          label="Address"
          value={hotel.address || ""}
          onChange={onChange}
          error={errors.address}
        />
        <SelectInput
          name="city"
          label="City"
          value={hotel.city ? hotel.city.id! : 0}
          defaultOption="Select City"
          options={selectMenuItems}
          onChange={onChange}
          error={errors.city}
        />

        <TextInput
          name="description"
          label="Description"
          value={hotel.description || ""}
          onChange={onChange}
          error={errors.description}
        />

        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
