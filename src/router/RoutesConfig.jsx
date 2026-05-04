import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Bookings from "../pages/Bookings/Bookings";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesConfig;
