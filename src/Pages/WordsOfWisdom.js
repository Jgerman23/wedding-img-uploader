import React, { useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../Firebase/Config";
import { motion } from "framer-motion";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const WordsOfWisdom = () => {
	const [wows, setWow] = useState([]);
	const [input, setInput] = useState("");
	const [name, setName] = useState("");

	const useStyles = makeStyles({
		root: {
			width: "100%",
			borderRadius: "5px",
		},
	});
	const classes = useStyles();

	useEffect(() => {
		projectFirestore
			.collection("wordsOfWisdom")
			.orderBy("createdAt", "desc")
			.onSnapshot((snapshot) => {
				setWow(snapshot.docs.map((doc) => doc.data()));
			});
	}, []);

	const handleWowChange = (event) => {
		const text = event.target.value;
		setInput(text);
	};

	const handleNameChange = (event) => {
		const text = event.target.value;
		setName(text);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const createdAt = timestamp();
		setTimeout(() => {
			projectFirestore.collection("wordsOfWisdom").add({
				wow: input,
				name: name,
				createdAt,
			});
		}, 500);
		setInput("");
		setName("");
	};
	return (
				<>
					<div className="wow-input">
						<Zoom>
							<TextareaAutosize
								aria-label="minimum height"
								rowsMin={6}
								placeholder="Words of Wisdom"
								className={classes.root}
								onChange={handleWowChange}
								value={input}
							/>
							<TextField
								id="standard-basic"
								label="Name"
								onChange={handleNameChange}
								value={name}
							/>
						</Zoom>
					</div>
					<div className="submit-btn-container center">
						<Zoom>
							<button
								className="waves-effect waves-light btn-large"
								onClick={handleSubmit}
							>
								<i className="material-icons right">send</i>Submit
							</button>
						</Zoom>
					</div>
					<br />
					<div className="wow-grid">
						{wows &&
							wows.map((wow) => {
								return (
									<motion.div
										className="wow-wrap"
										layout
										key={wow.createdAt}
									>
										<Fade bottom>
											<Card>
												<CardContent>
													<p className="wow-text">
														{wow.wow}
													</p>
												</CardContent>
												<div className="wow-name right-align">
													<p> - {wow.name}</p>
												</div>
											</Card>
										</Fade>
									</motion.div>
								);
							})}
					</div>
				</>
	);
};

export default WordsOfWisdom;
