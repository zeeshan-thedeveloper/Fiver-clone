//ReactJS
import React, { useState, useEffect, PureComponent } from "react";

//Image dropzone and Crop libraries
import { useDropzone } from "react-dropzone";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

//       <CustomPhotoUploader setSelectedFile={setSelectedFile} selectedImage={selectedImage} setSelectedImage={handelSelectImagesForGallary}/>
                                      


//Material-ui core
import {
  Box,
  Divider,
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Badge,
} from "@material-ui/core";

//Material-UI styles
import { makeStyles, withStyles } from "@material-ui/core/styles";

//Icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CancelIcon from '@material-ui/icons/Cancel';
//Routes

//Styles and Theme
import "../Styles/AccountSettingsPersonalInfo.css";
import { CloudUpload } from "@material-ui/icons";

//Resources

const profilePic = "https://firebasestorage.googleapis.com/v0/b/user-accounts-7cdc4.appspot.com/o/zeeshan.jpeg?alt=media&token=2b357d32-39c7-4369-88ad-c8b06599a9f9";

// Calling method , pass it hook with setter. you will get setted image in that hook.
{/* <CustomPhotoUploader selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> */}
  
const customPhotoUploader = makeStyles((theme) => ({
  root: {
    // maxWidth: "100%",
    marginTop: "2rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2px",
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 2, 2),
  },
}));

function CustomPhotoUploader(props){

  const classes = customPhotoUploader();
  const [openChooseImage, setOpenChooseImage] = useState(false);
  const handleProfileImageOpen = () => {
    setOpenChooseImage(true);
  };
  const handleProfileImageClose = () => {
    setOpenChooseImage(false);
  };
  return (
    <div>
          <div className="container">
            <div  onClick={handleProfileImageOpen} style={{cursor:'pointer'}}>
                <CloudUpload style={{fontSize:40}}/>
            </div>
            
          </div>
    <div>
        <Modal
          aria-labelledby="UpdateImageModalTitle"
          aria-describedby="UpdateImageModalDescription"
          className={classes.modal}
          open={openChooseImage}
          onClose={handleProfileImageClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openChooseImage}>
            <div className={classes.paper}>
              <Box mt={-4}>
                <ChooseImageModal
                  handleClose={handleProfileImageClose} 
                  setSelectedImage={props.setSelectedImage}
                  setSelectedFile={props.setSelectedFile}
                />
              </Box>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

const chooseImageStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
}));

const ChooseImageModal = (props) => {
  const classes = chooseImageStyles();

  function handleConfirm() {
    props.handleClose();
  }

  function handleClose(){
    props.handleClose();
  }
  
  return (
    <div>
      <Grid container>
        <Grid item xl={12} sm={12} md={12} lg={12} xl={12}>
          <CardContent>
            <Box display="flex">
              <Box flex={1}>
              <h4>Update Profile Image</h4>
              </Box>
              <Box mt={1}>
              <IconButton onClick={handleClose}>
                <CancelIcon color="primary"/>
              </IconButton>
            </Box>
            </Box>
            <Box display="flex">
                <PhotoPicker handleClose={props.handleClose}  setSelectedImage={props.setSelectedImage} setSelectedFile={props.setSelectedFile}/>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

class PhotoPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.setFiles = this.setFiles.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);

  }

  state = {
    src: null,
    fileContent:null,
    crop: {
      unit: "%",
      width: 30,
      aspect: 1 / 1,
    },
    
  };

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop) => {
    this.setState({ crop });
  };
  

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg = (image, crop, maxHeight) => {
    const canvas = document.createElement("canvas");

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const aspectRatio = crop.width / crop.height;

    let canvasHeight = crop.height * scaleY;
    let canvasWidth = crop.width * scaleX;

    if (maxHeight && canvasHeight > maxHeight) {
      canvasHeight = maxHeight;
      canvasWidth = Math.round(canvasHeight * aspectRatio);
    }

    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      canvasWidth,
      canvasHeight
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error("Canvas is empty");
            return;
          }
          blob.name = image;
          window.URL.revokeObjectURL(this.fileUrl);
          this.fileUrl = window.URL.createObjectURL(blob);
          resolve(this.fileUrl);
        },
        "image/jpeg",
        1
      );
    });
  };

  setFiles(file,fileContent) {
    
    this.setState({ src: file,fileContent:fileContent });
  }

  //Call APIS to update data of this user
  handleUpdateProfile() {
    // alert("Call to API for profile Update");
    // console.log(this.state.src)
    this.props.setSelectedImage(this.state.src);
    this.props.setSelectedFile(this.state.fileContent)
    this.props.handleClose();
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div>
        <div style={{ display: "flex" }}>
          {src && (
            <div
              style={{
                width: "200px",
                height: "200px",
                marginBottom: "70px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <ReactCrop
                src={src}
                crop={crop}
                ruleOfThirds
                onImageLoaded={this.onImageLoaded}
                onComplete={this.onCropComplete}
                onChange={this.onCropChange}
                imageAlt="Could Not load"
                circularCrop={true}
              />
            </div>
          )}

          {croppedImageUrl && (
            <div
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "5px",
                marginRight: "auto",
              }}
            >
              <img
                alt="Crop"
                style={{ maxWidth: "100%" }}
                src={croppedImageUrl}
              />
            </div>
          )}
        </div>
        <div>
          <Dropzone setFiles={this.setFiles} />
        </div>
        <Box display="flex" mt={1}>
          <Box flex={1}></Box>
          <Box>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleUpdateProfile}
              >
                Update
              </Button>
            </Box>
        </Box>
      </div>
    );
  }
}

function Dropzone(props) {


  const dropZoneStyles = {
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderRadius: 10,
    border: "2px dashed blue ",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    transition: "border .24s ease-in-out",
  };

  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      accept: "image/jpeg, image/png",
      maxFiles: 10,
      // maxWidth:100,  //bytes
      // maxSize:10000
      onDrop: (acceptedFiles) => {
        const currentFile = acceptedFiles[0];
        const file = currentFile;
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener("load", () => {
          const myResult = myFileItemReader.result;
          props.setFiles(myResult,file);
        });
        myFileItemReader.readAsDataURL(currentFile);
      },
    });

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })} style={dropZoneStyles}>
        <input {...getInputProps()} />
        <p>Drag and Drop or Click to attach image</p>
      </div>
    </div>
  );
}

export {CustomPhotoUploader as default, ChooseImageModal}

