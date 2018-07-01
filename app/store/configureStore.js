import {autoRehydrate, persistStore} from "redux-persist-immutable";
import {combineReducers} from "redux-immutable";
import Immutable from "immutable";
import {createStore} from "redux";
import {AsyncStorage} from "react-native";
import baseReducer from "../reducers/baseReducer";
import currentTaskReducer from "../reducers/currentTaskReducer";

const combinedReducers = combineReducers({
  base: baseReducer,
  currentTask: currentTaskReducer
});

const initialState = new Immutable.Map({
  base: Immutable.Map({
    newBase:true,
    baseDestroyed:false,
    level:1,
    totalSteps: 0,
    health: 0
  }),
  currentTask: Immutable.Map({
    newTaskRequired:true,
    completed: true,
    currentTaskDescription: 'There is a tornado in the distance. You need to quickly barricade your fort before the storm gets here and destroys it.',
    positiveOutcome:'We are not in Kansas anymore though',
    negativeOutcome:'the fort was seriously damaged',
    stepsCompleted: 0,
    stepsTarget: 20,
    outcomeModalIsOpen: false,
    hasFailed: false,
    timeAmount:600
  })
});

export default function configureStore() {
  const store = createStore(
    combinedReducers,
    initialState,
  );

  persistStore(
    store,
    {
      storage: AsyncStorage
    }
  );

  return store;
}