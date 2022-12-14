import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutInstitutional } from "../pages/AboutInstitutional";
import { ServiceNetworks } from "../pages/ServiceNetworks";
import { Providers } from "../pages/Providers";
import { Plans } from "../pages/Plans";
import { Broker } from "../pages/Broker";
import { Beneficiaries } from "../pages/Beneficiaries";
import { Notices } from "../pages/Notices";
import { WorkWithUs } from "../pages/WorkWithUs";
import { PlansEmployes } from "../pages/PlansEmployes";
import { PlansFamily } from "../pages/PlansFamily";
import { BusinesPlans } from "../pages/BusinesPlans";
import { Notices2 } from "../pages/Notices2";

export const Rotas = () => {
  return (
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
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/plans-employes" element={<PlansEmployes />} />
        <Route path="/plans-family" element={<PlansFamily />} />
        <Route path="/busines-plans" element={<BusinesPlans />} />
        <Route path="/notices2" element={<Notices2 />} />
      </Routes>
    </Router>
  );
};
