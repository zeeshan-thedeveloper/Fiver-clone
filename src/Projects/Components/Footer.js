import Grid from "@material-ui/core/Grid";
import "./Styles/FooterStyles.css";
import "../Color/Colors.css";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidRoundedIcon from "@material-ui/icons/AndroidRounded";
import SocialIconsForFooter from "./SocialIconsForFooter";
import { Link } from "react-router-dom";
import { DividerInFooter } from "./HorizontalLine";

export const Footer=(props)=>{
	return (
		<div className="themeColor primaryText upDownSpace">
			<Grid container spacing={0}>
				<Grid xs={0} sm={1} md={1} item></Grid>
				<Grid xs={12} sm={10} md={10} item container>
					<Grid item xs={12} sm={6} md={3}>
						<ul className="ulStyle">
							<li className="listHeading">Resources</li>

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
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<ul className="ulStyle">
							<li className="listHeading">Resources</li>

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
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<ul className="ulStyle">
							<li className="listHeading">Resources</li>

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
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<ul className="ulStyle">
							<li className="listHeading">Resources</li>

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
					</Grid>
				</Grid>
				<Grid xs={0} sm={1} md={1} item></Grid>
			</Grid>

			<SocialIconsForFooter />

			{/**for horizontal line */}
			<DividerInFooter />
			{/* for extra info*/}
			<Grid container>
				<Grid md={1} sm={3} xs={2} item></Grid>
				<Grid item md={3}>
					© 2015 - 2021 CodeInDNA® Global Inc.
				</Grid>
				<Grid md={5} sm={6} xs={2} item></Grid>
				<Grid md={2} sm={3} xs={2} item container>
					<span className="marginRight">Mobile Apps</span>
					<Link to="#" className="linkStyle">
						<AppleIcon />
					</Link>
					<Link to="#" className="linkStyle">
						<AndroidRoundedIcon />
					</Link>
				</Grid>
				<Grid md={1} sm={3} xs={2} item></Grid>
			</Grid>
		</div>
	);
}
