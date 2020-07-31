import React from "react";
import Navbar from "./Components/Navbar";
import "./Styles/main.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import WordsOfWisdom from "./Pages/WordsOfWisdom";
import Footer from "./Components/Footer";

function App() {
	return (
		<div
			style={{
				position: "relative",
				minHeight: "100vh",
			}}
		>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/photos" component={Photos} />
				<Route path="/wordsofwisdom" component={WordsOfWisdom} />
			</Switch>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
