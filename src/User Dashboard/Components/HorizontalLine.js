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