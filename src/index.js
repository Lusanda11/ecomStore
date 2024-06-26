// ****************** index_JS *********************


// Import necessary dependencies and styles.
// ----------------------------------------------------------------------------------------------------------------------------
    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./index.css";
    import App from "./App";
    import { Provider } from "react-redux";
    import { store, persistor } from "./redux/store";
    import "react-toastify/dist/ReactToastify.css";
    import { PersistGate } from "redux-persist/integration/react";
    import { app } from "./firebase/firebase";
// ----------------------------------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root element for rendering.


// Render the application.
// ----------------------------------------------------------------------------------------------------------------------------
    root.render(
        <Provider store={store} app={app}>
            <PersistGate loading={"loading"}persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
// ----------------------------------------------------------------------------------------------------------------------------
