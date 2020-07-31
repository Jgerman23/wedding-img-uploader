import React, { useState } from "react";
import { Textarea, Icon } from "react-materialize";
import Container from "../Components/Container";

const WordsOfWisdom = () => {
	const [post, setPost] = useState(null);

	const handleChange = (e) => {
		let text = e.target.value;
		setPost(text);
	};

	const handleSubmit = (e) => {
		console.log(post);
		setPost(null);
	};
	return (
		<div className="container">
			<h1>Words of Wisdom</h1>
			<Container>
				<Textarea
					icon={<Icon>mode_edit</Icon>}
					label="Words of Wisdom"
					onChange={handleChange}
				/>

				<button className="btn" onClick={handleSubmit}>Submit</button>
			</Container>
		</div>
	);
};

export default WordsOfWisdom;
