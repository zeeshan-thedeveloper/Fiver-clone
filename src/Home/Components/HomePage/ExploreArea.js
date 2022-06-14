import Grid from "@material-ui/core/Grid";
import colors from "../../../Theme/colors";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import { Icon } from "@material-ui/core";
import { DividerInservices } from "../HorizontalLine";
import HeaderTitle from "../HeaderTitle";

const ExploreArea = (props) => {
	return (
		<div style={{backgroundColor:colors.highlighter}}>
			<HeaderTitle
				title={"Explore Our Market"}
				description={`Get Your Project done on time and in reasonable budjet in various
						Categories options`}
			/>

			<Grid container spacing={0} style={{ marginTop: "4%" }}>
				<Grid xs={1} sm={2} md={1} item></Grid>
				<Grid xs={10} sm={8} md={10} item container spacing={4}>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<BorderColorIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Content Writting</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<AddToHomeScreenIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Digital Marketing</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<LocalCafeIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Life Style</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<LocalCafeIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Life Style</p>
					</Grid>
					<Grid item xs={0} sm={4} md={3}></Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<LocalCafeIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Life Style</p>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Icon>
							<AddToHomeScreenIcon style={{ fontSize: 48 }} />
						</Icon>
						<p> Digital Marketing</p>
					</Grid>
					<Grid item xs={12} sm={9} md={3}></Grid>
				</Grid>
				<Grid xs={1} sm={2} md={1} item></Grid>
			</Grid>
			<DividerInservices />
		</div>
	);
};
export default ExploreArea;
