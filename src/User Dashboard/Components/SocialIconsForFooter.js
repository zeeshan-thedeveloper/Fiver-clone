import Grid from "@material-ui/core/Grid";
import "./Styles/FooterStyles.css";
import "../Color/Colors.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YoutubeIcon from "@material-ui/icons/YouTube";
import { Link } from "react-router-dom";
const SocialIconsForFooter = () => {
	return (
		<Grid container className="upDownSpace">
			{/* for offset */}
			<Grid item xs={2} sm={4} md={5}></Grid>

			<Grid item xs={8} sm={4} md={2} container justifyContent="space-around">
				<span>Follow us</span>
				<Link to="#" className="linkStyle">
					<FacebookIcon />
				</Link>
				<Link to="#" className="linkStyle">
					<TwitterIcon />
				</Link>
				<Link to="#" className="linkStyle">
					<YoutubeIcon />
				</Link>
				<Link to="#" className="linkStyle">
					<LinkedInIcon />
				</Link>
			</Grid>
			{/* for offset */}
			<Grid item xs={2} sm={4} md={5}></Grid>
		</Grid>
	);
};
export default SocialIconsForFooter;
