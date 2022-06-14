
import { Grid } from "@material-ui/core";
import React from "react";
import "../Styles/headerStyles.css"

export default function HeaderTitle({ title, description }) {
	return (
		<Grid container spacing={0} style={{ marginBottom: "2%" }}>
			<Grid xs={0} sm={1} md={1} item></Grid>
			<Grid xs={12} sm={10} md={10} item style={{ textAlign: "center" }}>
				<p className="title">{title} </p>
				<p>{description}</p>
			</Grid>
			<Grid xs={0} sm={1} md={1} item></Grid>
		</Grid>
	);
}
