// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import ErrorPage from "../components/Error/ErrorPage.jsx";
import Home from "../components/Home/Home.jsx";
import About from "../components/About/About.jsx";
import Contact from "../components/Contact/ContactUS.jsx";
import ServiceUnavailable from "../components/ServiceUnavailable/Unavailable.jsx";
import User from "../components/User/User.jsx";
import Github ,{userInfoLoader} from "../components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="ServiceUnavailable" element={<ServiceUnavailable />} />

      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      
      <Route loader={userInfoLoader} path="github" element={<Github />} />
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
