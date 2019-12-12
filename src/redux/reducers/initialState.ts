import { Hotel } from "../../models/Hotel";
import { HotelsState } from "../../models/Hotel";

// The top-level state object
export interface InitialState {
  hotelsManagement: HotelsState;
}
