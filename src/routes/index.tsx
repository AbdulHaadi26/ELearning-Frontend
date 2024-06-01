import { Route, Navigate, Routes } from "react-router-dom";
import HomePage from "../pages/home/home.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
