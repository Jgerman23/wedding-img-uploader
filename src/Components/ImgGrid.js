import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";

const ImgGrid = ({ setSelectedImg }) => {
	const { docs } = useFirestore("images");
	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						className="img-wrap hoverable"
						key={doc.id}
						layout
						whileHover={{ opacity: 1 }}
						onClick={() => {
							setSelectedImg(doc.url);
						}}
					>
						<Fade bottom>
							<img src={doc.url} alt="uploaded" />
						</Fade>
					</motion.div>
				))}
		</div>
	);
};

export default ImgGrid;
