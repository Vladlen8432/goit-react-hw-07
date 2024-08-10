import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "./contactSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter"],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
