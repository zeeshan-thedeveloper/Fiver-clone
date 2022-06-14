import React, { useEffect, useState } from "react";
import { Divider, Grid, makeStyles, Box } from "@material-ui/core";
import { SmallHeading } from "../../../CustomComponents/UI/Text/SmallHeading";
import { TextField } from "@material-ui/core";
import colors from "../../../Theme/colors";
import { RoundButton } from "../../../CustomComponents/UI/Buttons/RoundButton";
import { TextFonts } from "../../../Theme/fonts";
import { useMediaQuery } from "@material-ui/core";
import AttachmentSharpIcon from "@material-ui/icons/AttachmentSharp";
import { Chip } from "@material-ui/core";
import { Paper, Tooltip } from "@material-ui/core";
import { styled, withStyles } from "@material-ui/core";
import CustomAlerts from "../../../CustomComponents/UI/Support/Alerts";
import { lightBorder } from "../../../Theme/borders";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectStandardQueries,
  sendContactFormDetails,
  loadStandardQueries,
} from "../Slices/AboutPageSlices/ContactUsGlobalFormSlice";

//custom tooltip
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: colors.highlighter,
    color: colors.black,
    boxShadow: theme.shadows[1],
    fontSize: 11,
    fontWeight: "bolder",
  },
}))(Tooltip);

// temp queries
const queries = [
  { label: "How i can place my order", value: "How i can place my order" },
  {
    label: "How to register for new account",
    value: "How to register for new account",
  },
  { label: "I forget my email address", value: "I forget my email address" },
];

// styles
const useContactFormStyles = makeStyles((theme) => ({
  textArea: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "5%" : "7%",
  },
  textField: {
    width: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "49%" : "100%",
  },
  fonts: {
    font: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? TextFonts.XXSmall : TextFonts.medium,
  },
  fileNameChips: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    minHeight: "0px",
    maxHeight: "100px",
    overflowY: "scroll",
    marginTop: "1%",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  margin: {
    marginTop: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen ? "3%" : "6%",
  },
  marginRightOne: {
    marginRight: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen && "1%",
  },
  marginLeftOne: {
    marginLeft: (isDesktopOrLaptopOrTabletScreen) =>
      isDesktopOrLaptopOrTabletScreen && "1%",
  },
  card: {
    // boxShadow:
    //   "0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.19)",
    width: "80%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingBottom: "5%",
    backgroundColor: colors.white,
    border: lightBorder,
    textAlign: "center",
  },
  attachmentIcon: {
    float: "left",
    transform: "rotate(145deg)",
    cursor: "pointer",
  },
  chipDesign: {
    backgroundColor: colors.white,
    color: colors.primary,
    fontWeight: "bolder",
  },
}));

//ContactUsGlobalForm
const ContactUsGlobalForm = () => {
  // redux
  const dispatch = useDispatch();
  const standard_queries = useSelector(selectStandardQueries);
  const { loadStandardQueriesIsLoading } = useSelector(
    (state) => state.contactFormDetails
  );
  const { loadStandardQueriesHasError } = useSelector(
    (state) => state.contactFormDetails
  );
  const { sendContactFormDetailsIsLoading } = useSelector(
    (state) => state.contactFormDetails
  );
  const { sendContactFormDetailsHasError } = useSelector(
    (state) => state.contactFormDetails
  );

  useEffect(() => {
    dispatch(loadStandardQueries());
  }, [dispatch]);

  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");

  // local states
  const [query, setQuery] = useState("");
  const [customeQuery, setCustomeQuery] = useState("");
  const classes = useContactFormStyles(isDesktopOrLaptopOrTabletScreen);
  const [isDisplayOtherQueryField, setIsDisplayOtherQueryField] =
    useState("none");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  // local states for upladed files
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [totalUploadedFileSizes, setTotalUploadedFileSizes] = useState(0);

  // hanlders
  const handleSetName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleSetEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleQueryChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    if (event.target.value !== "Other") {
      setIsDisplayOtherQueryField("none");
      setCustomeQuery("");
    } else {
      setIsDisplayOtherQueryField("block");
    }
  };
  const handleSetDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const handleSetCustomeQuery = (event) => {
    event.preventDefault();
    setCustomeQuery(event.target.value);
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();
    let userQuery = isDisplayOtherQueryField === "none" ? query : customeQuery;
    dispatch(
      sendContactFormDetails({
        name,
        email,
        description,
        userQuery,
        uploadedFiles,
      })
    ).then(() => {
      alert("submitted");
      clearForm();
    });
  };

  const clearForm = () => {
    setCustomeQuery("");
    setDescription("");
    setQuery(queries[0].label);
    setEmail("");
    setName("");
  };

  // hanlder for file upload
  const handleUploadedFileDelete = (id) => {
    setUploadedFiles((Files) => Files.filter((file, index) => index !== id));
  };
  const FileNamesChips = () => {
    return (
      <div className={classes.fileNameChips}>
        {uploadedFiles.map((file, index) => {
          return (
            <Chip
              className={classes.chipDesign}
              key={index}
              label={file.name}
              onDelete={() => handleUploadedFileDelete(index)}
            />
          );
        })}
      </div>
    );
  };

  const checkFileSize = (size) => {
    // to convert bytes to MB
    const TWENTYFIVEMB = 25 * 1024 * 1024;
    let calcultaeEstimatedSize = totalUploadedFileSizes + size;
    if (calcultaeEstimatedSize > TWENTYFIVEMB) {
      setOpenAlert(true);
      return 0;
    } else {
      setTotalUploadedFileSizes(calcultaeEstimatedSize);
      return 1;
    }
  };
  const handleFileUpload = async (e) => {
    for (let file of e.target.files) {
      // check if file size not exceeds 25 MB than covert file and add it to array of uploaded files
      let canFileBeAdded = checkFileSize(file.size);
      if (canFileBeAdded) {
        let data = await encodeFileBase64(file);
        let obj = await {
          name: file.name,
          size: file.size,
          type: file.type,
          encodedData: data,
        };
        console.log(obj);
        setUploadedFiles((allFiles) => [...allFiles, obj]);
        console.log(uploadedFiles);
      }
    }
  };

  const encodeFileBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <form className={classes.card}>
        <SmallHeading title="Share your Queries" />
        <Box display="inline">
          <TextField
            id="name"
            label="Full Name"
            defaultValue=""
            variant="outlined"
            className={[
              classes.fonts,
              classes.textField,
              classes.marginRightOne,
              classes.margin,
            ]}
            value={name}
            onChange={handleSetName}
            required
            size="small"
            type="text"
          />
          <TextField
            id="email"
            label="Email"
            defaultValue=""
            variant="outlined"
            className={[
              classes.fonts,
              classes.textField,
              classes.marginLeftOne,
              classes.margin,
            ]}
            value={email}
            onChange={handleSetEmail}
            required
            size="small"
            type="email"
          />
        </Box>
        <TextField
          id="customerQueries"
          select
          label="Please select your query"
          value={query}
          defaultValue=""
          fullWidth
          onChange={handleQueryChange}
          className={[classes.fonts, classes.margin]}
          SelectProps={{
            native: true,
          }}
          size="small"
          // helperText="Please select your query"
          variant="outlined"
        >
          {!loadStandardQueriesIsLoading &&
            standard_queries.map((query) => (
              <option
                key={query.value}
                value={query.value}
                className={classes.fonts}
              >
                {query.label}
              </option>
            ))}
          <Divider />
          <option className={classes.fonts}>Other</option>
        </TextField>
        <Box display={isDisplayOtherQueryField}>
          <TextField
            id="ootherQuery"
            label="query"
            defaultValue=""
            variant="outlined"
            fullWidth
            className={[classes.margin, classes.fonts]}
            size="small"
            value={customeQuery}
            onChange={handleSetCustomeQuery}
            required
          />
        </Box>
        <TextField
          id="description"
          label="Description"
          multiline
          rows={isDesktopOrLaptopOrTabletScreen ? 10 : 5}
          defaultValue=""
          variant="outlined"
          fullWidth
          className={[classes.textArea, classes.fonts]}
          value={description}
          onChange={handleSetDescription}
          required
        />
        <input
          // accept=".json,.csv,.txt,.text,application/json,text/csv,text/plain,image/*,application/pdf,application/msword,application/*"
          style={{ display: "none" }}
          type="file"
          name="files"
          onChange={handleFileUpload}
          multiple
          id="uploadFilesInContactForm"
        />

        <LightTooltip
          title="You can attach upto 25 MB"
          aria-label="upload Files"
        >
          <label
            htmlFor="uploadFilesInContactForm"
            className={classes.attachmentIcon}
          >
            <AttachmentSharpIcon />
          </label>
        </LightTooltip>

        {/* Uploaded files set as chips for users */}
        <FileNamesChips />
        <CustomAlerts
          title={`Size exceeds 25 MB, In case send any drive or dropbox Link`}
          open={openAlert}
          severity={`warning`}
          size="small"
          setOpen={setOpenAlert}
          bgColor={colors.white}
          color={colors.warning}
          width={"100%"}
        />

        <RoundButton
          title={"Submit"}
          width={"50%"}
          color={colors.white}
          bgColor={colors.secondary}
          margin={"5% 0% 0%  0%"}
          handleClick={handleSubmitClick}
        />
      </form>
    </Grid>
  );
};
export default ContactUsGlobalForm;
