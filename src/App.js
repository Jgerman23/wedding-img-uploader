import React from "react";
import Navbar from "./Components/Navbar";
import "./Styles/main.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</>
	);
}

export default App;
