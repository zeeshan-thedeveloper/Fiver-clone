import Grid from "@material-ui/core/Grid";
export const DividerInFooter = () => {
	return (
		<Grid container>
			{/* for offset */}
			<Grid item md={4} sm={3} xs={2}></Grid>
			<Grid item xs={8} md={4} sm={6}>
				<hr />
			</Grid>
			<Grid md={4} sm={3} xs={2}></Grid>
		</Grid>
	);
};

export const DividerInservices = () => {
	return (
		<Grid container style={{ marginTop: "10%" }}>
			{/* for offset */}
			<Grid item md={1} sm={1} xs={1}></Grid>
			<Grid item xs={10} md={10} sm={10}>
				<hr style={{ borderColor: "#f8f9fa" }} />
			</Grid>
			<Grid md={1} sm={1} xs={1}></Grid>
		</Grid>
	);
};

export const DividerInProjects = () => {
	return (
		<Grid container style={{ marginTop: "5%", marginBottom: "5%" }}>
			{/* for offset */}
			<Grid item md={1} sm={1} xs={1}></Grid>
			<Grid item xs={10} md={10} sm={10}>
				<hr style={{ borderColor: "#f8f9fa" }} />
			</Grid>
			<Grid md={1} sm={1} xs={1}></Grid>
		</Grid>
	);
};
