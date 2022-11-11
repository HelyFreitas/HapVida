import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home";
import { SecondPage } from "../pages/SecondPage";

export const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/secondpage" element={<SecondPage />} />
            </Routes>
        </Router>
    );
}