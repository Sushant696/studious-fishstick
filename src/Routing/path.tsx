// import {  createBrowserRouter  } from "react-router-dom";
import Error from "../Routing/error-page";
import { Route, Routes } from "react-router-dom";
import Grocery from "../productListing/category/grocery";
import { SmartPhones } from "../productListing/category/smartPhones";
import { Laptops } from "../productListing/category/laptops";
import DecorationItems from "../productListing/category/decor";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path="/smartphone"
          element={<SmartPhones />}
          errorElement={<Error />}
        />
        <Route
          path="/laptops"
          element={<Laptops />}
          errorElement={<Error />}
        />

        <Route path="/Grocery" element={<Grocery />} errorElement={<Error />} />

        <Route
          path="/decor"
          element={<DecorationItems />}
          errorElement={<Error />}
        />
      </Routes>
    </>
  );
};
