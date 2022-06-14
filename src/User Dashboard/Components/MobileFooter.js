import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidRoundedIcon from "@material-ui/icons/AndroidRounded";
import "../Color/Colors.css";
import "./Styles/FooterStyles.css";
import { Link } from "react-router-dom";
import SocialIconsForFooter from "./SocialIconsForFooter";
import { DividerInFooter } from "./HorizontalLine";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(12),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	themeColor: {
		backgroundColor: "#011c38",
		color: "rgb(213, 212, 210)",
	},
}));

export default function MobileFooter() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Grid
			item
			xs={12}
			className={classes.root}
			className="themeColor primaryText "
			container
		>
			<Grid item xs={1}></Grid>
			<Grid item xs={10}>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					classes={{
						root: classes.themeColor,
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading}>Resources</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<ul className="ulStyle">
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel2"}
					onChange={handleChange("panel2")}
					classes={{
						root: classes.themeColor,
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading}>Resources</Typography>
					</AccordionSummary>
					<AccordionDetails className="themeColor primaryText">
						<ul className="ulStyle">
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel3"}
					onChange={handleChange("panel3")}
					classes={{
						root: classes.themeColor,
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading}>Resources</Typography>
					</AccordionSummary>
					<AccordionDetails className="themeColor primaryText">
						<ul className="ulStyle">
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
						</ul>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={expanded === "panel4"}
					onChange={handleChange("panel4")}
					classes={{
						root: classes.themeColor,
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading}>Resources</Typography>
					</AccordionSummary>
					<AccordionDetails className="themeColor primaryText">
						<ul className="ulStyle">
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
							<Link to="#" className="linkStyle">
								<li className="liStyle">Random feature</li>
							</Link>
						</ul>
					</AccordionDetails>
				</Accordion>
			</Grid>
			<Grid item xs={1}></Grid>
			
			<SocialIconsForFooter />
			
			<DividerInFooter />

			<Grid container className="upDownSpace">
				<Grid xs={4} item></Grid>
				<Grid xs={6} item container>
					<span className="rightMargin">Mobile Apps</span>
					<Link to="#" className="linkStyle">
						<AppleIcon />
					</Link>
					<Link to="#" className="linkStyle">
						<AndroidRoundedIcon />
					</Link>
				</Grid>
				<Grid xs={4} item></Grid>
			</Grid>
			<Grid container style={{ fontSize: 12 }} className="upDownSpace">
				<Grid xs={2} item></Grid>
				<Grid item xs={8}>
					© 2015 - 2021 CodeInDNA® Global Inc.
				</Grid>
				<Grid xs={2} item></Grid>
			</Grid>
		</Grid>
	);
}
