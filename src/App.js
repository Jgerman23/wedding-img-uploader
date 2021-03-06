import React from "react";
import Navbar from "./Components/Navbar";
import "./Styles/main.scss";
import { Switch, Route } from "react-router-dom";
import Container from "./Components/Container";
import Home from "./Pages/Home";
import Photos from "./Pages/Photos";
import WordsOfWisdom from "./Pages/WordsOfWisdom";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Container>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/photos" component={Photos} />
					<Route path="/wordsofwisdom" component={WordsOfWisdom} />
				</Switch>
			</Container>
			<Footer />
		</>
	);
}

export default App;
