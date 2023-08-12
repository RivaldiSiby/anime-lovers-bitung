import storage from "@react-native-async-storage/async-storage";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
