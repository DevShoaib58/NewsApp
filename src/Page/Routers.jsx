import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import { BrowserRouter } from "react-router-dom";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="/about" element={<About myprop={data} />}> </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Routers;