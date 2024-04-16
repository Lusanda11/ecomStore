// ****************** store_JS *********************


// Import necessary dependencies.
// ----------------------------------------------------------------------------------------------------------------------------
    import { configureStore } from "@reduxjs/toolkit";
    import { bazarSlice } from "./bazaarSlice";
    import { persistReducer } from "redux-persist";
    import storage from "redux-persist/lib/storage";
    import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
    import persistStore from "redux-persist/es/persistStore";
// ----------------------------------------------------------------------------------------------------------------------------

// Configure redux-persist.
// ----------------------------------------------------------------------------------------------------------------------------
    const persistConfig =
    {
      key: "root",
      version: 1,
      storage,
    };
// ----------------------------------------------------------------------------------------------------------------------------



const persistedReducer = persistReducer(persistConfig, bazarSlice.reducer); // Create the persisted reducer.


// Create the Redux store.
// ----------------------------------------------------------------------------------------------------------------------------
    export const store = configureStore({
      reducer: {"bazar": persistedReducer},
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
// ----------------------------------------------------------------------------------------------------------------------------


export let persistor = persistStore(store) // Create the Redux persistor.
