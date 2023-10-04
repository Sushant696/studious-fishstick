// import {  createBrowserRouter  } from "react-router-dom";
import Error from "../Routing/error-page";
import { HomePage } from "../Pages/Homepage";
import ImageSlider from "../Pages/carousel";
import Contact from "../Pages/contact";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../Pages/about";
import { ProductList } from "../productListing";
import {SmartPhones} from "../productListing/category/smartPhones";
import { Laptops } from "../productListing/category/laptops";
import  ControlledComponent from "../concepts/formHandling";


export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} errorElement={<Error />} />
        <Route
          path="/Carousel"
          element={<ImageSlider />}
          errorElement={<Error />}
        />
        <Route path="/contact" element={<Contact />} errorElement={<Error />} />
        <Route
          path="/hahu"
          element={<Navigate to="/carousel" />}
          errorElement={<Error />}
        />
        <Route path="/about" element={<About />} errorElement={<Error />} />

        < Route path="/listing" element={<ProductList/>} errorElement={<Error />} />


        <Route path="/smartphones" element={<SmartPhones/>} errorElement={<Error />} /> 

        <Route path="/Laptops" element={<Laptops/>} errorElement={<Error />} /> 
        <Route path="/form" element={<ControlledComponent/>} errorElement={<Error />} /> 
      </Routes>
    </>
  );
};
