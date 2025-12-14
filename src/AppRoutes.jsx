import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Price from "./pages/Price";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
        </Routes>
    );
}