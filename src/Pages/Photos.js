import React, { useState } from "react";
import "materialize-css";
import Title from "../Components/Title";
import UploadForm from "../Components/UploadForm";
import ImgGrid from "../Components/ImgGrid";
import Modal from "../Components/Modal";

const Photos = () => {
	const [selectedImg, setSelectedImg] = useState(null);
	return (
		<>
			<Title />
			<UploadForm />
			<ImgGrid setSelectedImg={setSelectedImg} />
			{selectedImg && (
				<Modal
					selectedImg={selectedImg}
					setSelectedImg={setSelectedImg}
				/>
			)}
		</>
	);
};

export default Photos;
