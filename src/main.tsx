import ReactDOM from "react-dom/client";
import React from "react";

import "./index.css";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    <Toaster></Toaster>
  </React.StrictMode>
);
