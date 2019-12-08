import * as React from "react";
import { Hotel } from "../../models/Hotel";
import HotelsList from "./HotelsList";
import { connect } from "react-redux";
import { InitialState } from "../../redux/reducers/initialState";
import * as actions from "../../redux/actions/hotelActions";
import { Redirect } from "react-router";

interface HotelsPageProps {
  hotels: Hotel[];
  loadHotels: any;
  deleteHotel: any;
}

class HotelsPage extends React.Component<HotelsPageProps, {}> {
  public state = {
    hotels: [],
    redirectToAddHotelPage: false
  };

  constructor(props: HotelsPageProps) {
    super(props);
    this.handleDeleteHotel = this.handleDeleteHotel.bind(this);
  }

  componentDidMount() {
    if (this.state.hotels.length == 0) {
      this.props.loadHotels();
    }
  }

  handleDeleteHotel(hotelId: number) {
    this.props.deleteHotel(hotelId);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.redirectToAddHotelPage && <Redirect to="/hotel/:id" />}
        <h3>Hotels</h3>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-hotel"
          onClick={() => this.setState({ redirectToAddHotelPage: true })}
        >
          Add Hotel{" "}
        </button>
        <HotelsList
          hotels={this.props.hotels}
          onDeleteClick={this.handleDeleteHotel}
        />
      </React.Fragment>
    );
  }
}

export default connect((state: InitialState) => state, actions)(HotelsPage);
