import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function () {
  let store = createStore(persistedReducer, applyMiddleware(logger));
  let persistor = persistStore(store);
  return { store, persistor };
}
