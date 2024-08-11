import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51PmjOfAw9dKVZ2MHa8IgVciMTqlDwgoqzjGmhXkd1XDXRG8wlmDYjFf7Ou8TP7EHr7lfkoQps1ExDjPgtw0QNH2y00uxR1sVXR"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Elements>
  </React.StrictMode>
);
