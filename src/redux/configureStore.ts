import { createStore, applyMiddleware, compose, Store } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { InitialState } from "./reducers/initialState";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(
  initialState: InitialState
): Store<InitialState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});

  // We'll create our store with the combined reducers and the initial Redux state that
  // we'll be passing from our entry point.
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
