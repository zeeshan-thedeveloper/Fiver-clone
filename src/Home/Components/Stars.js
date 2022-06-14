import StarIcon from "@material-ui/icons/Star";

const Stars = ({ noOfStars, fontSize, color }) => {
	let starCounter = [];
	for (let i = 0; i < noOfStars; i++) {
		starCounter.push(i);
	}

	return (
		<div>
			{starCounter.map((item) => (
				<StarIcon color={color} fontSize={fontSize} key={"starKey_" + item} />
			))}
		</div>
	);
};

export default Stars;
