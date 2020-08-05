import React, { useState } from "react";
import Progressbar from "../Components/Progressbar";
import Zoom from "react-reveal/Zoom";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ["image/png", "image/jpeg", "image/jpg"];

	const changeImgHandler = (e) => {
		let selected = e.target.files[0];

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError("");
		} else {
			setFile(null);
			setError("Please select an image file (png, jpeg, or jpg)");
		}
	};

	return (
			<form>
				<Zoom delay={200}>
					<label>
						<input type="file" onChange={changeImgHandler} />
						<i className="medium material-icons">add_circle_outline</i>
					</label>
				</Zoom>
				<div className="output">
					{error && <div className="error">{error}</div>}
					{file && <div>{file.name}</div>}
					{file && <Progressbar file={file} setFile={setFile} />}
				</div>
			</form>
	);
};

export default UploadForm;
