// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import React from "react";

import "./index.css";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </Provider> */}
    {/* <Toaster></Toaster> */}
  </React.StrictMode>
);
