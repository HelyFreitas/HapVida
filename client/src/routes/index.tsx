import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home";
import { AboutInstitutional } from "../pages/AboutInstitutional";
import { ServiceNetworks } from "../pages/ServiceNetworks";
import { Providers } from "../pages/Providers";
import { Plans } from "../pages/Plans";
import { Broker } from "../pages/Broker";
import { Beneficiaries } from "../pages/Beneficiaries";
import { Notices } from "../pages/Notices";

export const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-institutional" element={<AboutInstitutional />} />
                <Route path="/service-networks" element={<ServiceNetworks />} />
                <Route path="/beneficiaries" element={<Beneficiaries />} />
                <Route path="/broker" element={<Broker />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/providers" element={<Providers />} />
                <Route path="/notices" element={<Notices />} />
            </Routes>
        </Router>
    );
}