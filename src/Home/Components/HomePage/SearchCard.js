import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { CardHeader } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import colors from "../../../Theme/colors";
import { TextFonts, Headingfonts } from "../../../Theme/fonts";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  loadSearchResults,
  loadServiceWithSubServices,
} from "../Slices/HomePageSlices/SearchCardSlice";
import { selectServicesAndSubServices } from "../Slices/HomePageSlices/SearchCardSlice";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
    transition: "transform 0.15s ease-in-out",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
  button: {
    backgroundColor: colors.secondary,
    color: colors.white,
  },
  media: {
    height: 140,
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "85%",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  cardContent: {
    shadow: "none",
    focus: "none",
  },
  cardHeader: {
    font: Headingfonts.extraSmall,
  },
}));

export default function SearchCard() {
  //redux
  const dispatch = useDispatch();
  const services_and_subServices = useSelector(selectServicesAndSubServices);
  const { loadServiceWithSubServicesIsLoading } = useSelector(
    (state) => state.searchByCategory
  );

  useEffect(() => {
    dispatch(loadServiceWithSubServices());
  }, [dispatch]);

  const classes = useStyles();

  // local states
  const [category, setCatgory] = useState("");
  const [subCategory, setSubCatgory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isSubCaregoryDisabled, setIsSubCaregoryDisabled] = useState(true);

  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });

  // hanlders
  const handleCategoryChange = (event) => {
    setCatgory(event.target.value);
    setIsSubCaregoryDisabled(false);

    setSubCategories(
      services_and_subServices.filter(
        (service) => service.title === event.target.value
      )[0].subServices
    );
  };
  const handleSubCategoryChange = ({ target }) => {
    setSubCatgory(target.value);
  };
  const handleKewordChange = ({ target }) => {
    setKeyword(target.value);
  };

  const ReInitializeSearchCardStates = () => {
    setKeyword("");
    setCatgory("");
    setSubCategories([]);
    setIsSubCaregoryDisabled(true);
    setSubCatgory("");
  };
  
  const handleCardSearchClick = () => {
    // needs to define gernal validations here
    dispatch(loadSearchResults({ keyword, category, subCategory })).then(
      () => {
        alert("navigative to sub category page");
        ReInitializeSearchCardStates();
      },
      () => alert("error in serach results")
    );
  };
  return (
    <Card
      className={classes.root}
      elevation={0}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
    >
      <CardHeader
        classes={{ title: classes.cardHeader }}
        title="Get the best team today, Search Anythig!!!"
      />

      <CardContent>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="searchKeywords"
            label="Keyword"
            value={keyword}
            onChange={handleKewordChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="categoryLabel">Category</InputLabel>
            <Select
              labelId="category"
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              {!loadServiceWithSubServicesIsLoading &&
                services_and_subServices.map((service) => (
                  <MenuItem value={service.title}>{service.title}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="subCategoryLabel">Sub category</InputLabel>
            <Select
              labelId="subCaregorySelector"
              id="subCaregorySelector"
              value={subCategory}
              onChange={handleSubCategoryChange}
              disabled={isSubCaregoryDisabled}
            >
              {!loadServiceWithSubServicesIsLoading &&
                subCategories.map((category) => (
                  <MenuItem value={category}>{category} </MenuItem>
                ))}
            </Select>
          </FormControl>
        </form>
      </CardContent>

      <CardActions style={{ marginBottom: 20 }}>
        <RoundButton
          title={`Search`}
          color={colors.white}
          bgColor={colors.secondary}
          handleClick={handleCardSearchClick}
          width={"100%"}
          variant="contained"
          margin={"2% 1% 1% 1%"}
          type={"submit"}
        />
      </CardActions>
    </Card>
  );
}
