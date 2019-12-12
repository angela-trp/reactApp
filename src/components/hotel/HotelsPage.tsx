import * as React from "react";
import { Hotel, HotelsState } from "../../models/Hotel";
import HotelsList from "./HotelsList";
import { connect } from "react-redux";
import { InitialState } from "../../redux/reducers/initialState";
import * as actions from "../../redux/actions/hotelActions";
import { Redirect } from "react-router";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

interface HotelsPageProps {
  hotels: Hotel[];
  loadHotels: any;
  deleteHotel: any;
  loading: boolean;
}

class HotelsPage extends React.Component<HotelsPageProps, {}> {
  public state = {
    redirectToAddHotelPage: false
  };

  constructor(props: HotelsPageProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.hotels.length === 0) {
      this.props.loadHotels();
    }
  }

  handleDeleteHotel = (hotelId: number) => {
    try {
      this.props.deleteHotel(hotelId);
      toast.success("Hotel deleted");
    } catch (error) {
      toast.error("Delete failed " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddHotelPage && <Redirect to="/hotel" />}
        <h2>Hotels</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            {" "}
            <HotelsList
              hotels={this.props.hotels}
              onDeleteClick={this.handleDeleteHotel}
            />
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-hotel"
              onClick={() => this.setState({ redirectToAddHotelPage: true })}
            >
              Add Hotel{" "}
            </button>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: InitialState) => {
  return {
    hotels: state.hotelsManagement.hotels,
    loading: state.hotelsManagement.loading
  };
};

export default connect(mapStateToProps, actions)(HotelsPage);
