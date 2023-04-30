import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import CheckoutSystem from "./components/PrivateProjects/CheckoutSystem";
import TechOps from "./components/PrivateProjects/TechOps";
import ResellBot from "./components/PrivateProjects/ResellBot";
import AmazonAffiliateBot from "./components/PrivateProjects/AmazonAffiliateBot";
import YoloAPI from "./components/PrivateProjects/YoloAPI";
import RoomSignage from "./components/PrivateProjects/RoomSignage";

function AppRouter() {
	return (
		<Router>
			<App></App>
			<Routes>
				<Route path="/" element={<Home />} index />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Home />} />
				<Route path="/projects/CheckoutSystem" element={<CheckoutSystem />} />
				<Route path="/projects/TechOps" element={<TechOps />} />
				<Route path="/projects/ResellBot" element={<ResellBot />} />
				<Route
					path="/projects/AmazonAffiliateBot"
					element={<AmazonAffiliateBot></AmazonAffiliateBot>}
				></Route>
				<Route path="/projects/YoloAPI" element={<YoloAPI></YoloAPI>}></Route>
				<Route path="/projects/RoomSignage" element={<RoomSignage></RoomSignage>}></Route>
			</Routes>
		</Router>
	);
}

export default AppRouter;
