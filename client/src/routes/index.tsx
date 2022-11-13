import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home";
import { AboutInstitutional } from "../pages/AboutInstitutional";
import { ServiceNetworks } from "../pages/ServiceNetworks";

export const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-institutional" element={<AboutInstitutional />} />
                <Route path="/service-networks" element={<ServiceNetworks />} />
            </Routes>
        </Router>
    );
}