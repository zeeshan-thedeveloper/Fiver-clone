import React,{useState} from 'react';
import { Grid,makeStyles,TextField,Button,Box} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function PreviewProjectTab(props) {
    const classes = useStyles();
    const [keyWordText,setKeyWordText]=useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    const [gallaryImages,setGallaryImages]=useState([
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:1,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:2,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:3,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:4,
            cols: 1,
        },
        {
            img:"https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
            imagekey:5,
            cols: 1,
        },
        
    ]);
   
    const [thumbnail,setThumbnail]=useState("https://mir-s3-cdn-cf.behance.net/projects/404/dab046106129401.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg")
    const [chipData, setChipData] = useState([
        {
            label:"key word",
            key:0
        },
        {
            label:"key word",
            key:1
        },
        {
            label:"key word",
            key:2
        },
        {
            label:"key word",
            key:3  
        },
        {
            label:"key word",
            key:4   
        },
        {
            label:"key word",
            key:5   
        },
        {
            label:"key word",
            key:6   
        },
        {
            label:"key word",
            key:7 
        },
        {
            label:"key word",
            key:8   
        },
        {
            label:"key word",
            key:9   
        },
        {
            label:"key word",
            key:10  
        },
        {
            label:"key word",
            key:11  
        },
        {
            label:"key word",
            key:12  
        },
        {
            label:"key word",
            key:13   
        },
        
        
        ])

        const options = [
            'Delete',
          ];
          
          const ITEM_HEIGHT = 30;
         
        // Menue bar options
          const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
          };
        
          const handleClose = (event,selectedIndex) => {
            setAnchorEl(null);
           
          };
        //   Switch
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
          };
        const handelSelection = (event)=>
        {
            setThumbnail(URL.createObjectURL(event.target.files[0]))
        }
    
        const handelAddBtnEvent=()=>{
            let tempKey = 0;
            let tempData = chipData.map((item)=> { 
              tempKey=item.key;
            return  item
            })
            tempData.push({key:tempKey+1,label:keyWordText})
            setChipData(tempData);
          }
        const handSelectImagesForGallary = (event)=>{
            let tempKey = 0;
            let tempData = [{}]
            tempData = gallaryImages.map((item)=> { 
              tempKey=item.key;
              return  item
            
            })
            try{
              tempData.push(
                {
                            img:URL.createObjectURL(event.target.files[0]),
                            key:tempKey,
                            cols: 1,
                })
        
              setGallaryImages(tempData);
            }catch(e){
              alert("here is the error")
            }
            
          }
      
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      };
        return (
        <div className={classes.container}> 
            <Grid container>
                <Grid item xs={4} className={classes.leftSide}>
                        
                        <Grid container>
                            <Grid item xs={12} className={classes.textFields}>
                                {/* Project title */}
                                <TextField id="outlined-basic" label="Project Title" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                {/* Project description */}
                                <TextField
                             id="filled-multiline-static"
                             label="Project description"
                             multiline
                             rows={8}  
                             variant="outlined"
                             className={classes.multilineTextField}
                           />
                            </Grid>
                            <Grid item xs={12} className={classes.textFields}>
                                {/* Project Estimated cost */}
                                <TextField id="outlined-basic" label="Estimated Cost" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} className={classes.textFields}>
                                {/* Project Selected catagory */}
                                <TextField id="outlined-basic" label="Selected Catagory" variant="outlined" />
                            </Grid>
                            <Grid item xs={8} className={classes.visibilityControl}>
                            <FormGroup>
                                   
                                   <FormControlLabel
                                     control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                     label="Visible "
                                   />
                                  
                            </FormGroup>
                            </Grid>
                        </Grid>
                </Grid>
                <Grid item xs={8} className={classes.rightSide}>
                        
                        <Grid container>
                            <Grid item xs={12}>
                                {/* List of selected key words */}
                         <div>
                            <h4>Selected key words</h4>
                            <Grid container className={classes.keyWordsInputContainer}>
                                <Grid item xs={8}>
                                    {/* Key work text field */}
                                    <TextField id="filled-basic" label="Key word"  variant="filled" onChange={(e)=>{
                                      setKeyWordText(e.target.value)
                                    }}/>
                                </Grid>
                                <Grid item xs={4} >
                                    {/* Add key word btn */}
                                    <Button className={classes.addBtn} variant="contained" color="primary" onClick={handelAddBtnEvent}>
                                      Add
                                    </Button>
                                </Grid>
                          </Grid>     
                          
                         </div>       
                        <Box style={{overflow: 'auto',height:140, width: '90%',marginLeft:'5%'}}>
                          <Grid container>
                              <Paper component="ul" className={classes.rootChips}>
                                  {chipData.map((data) => {
                                   let icon;
                           
                                   return(
                                     <span key={data.key}>
                                       <Chip
                                         icon={icon}
                                         label={data.label}
                                         onDelete={handleDelete(data)}
                                         className={classes.chip}
                                       />
                                     </span>
                                   )
                                 })}
                               </Paper>
                          </Grid>
                          </Box>             
                            </Grid>
                            <Grid item xs={12}>
                            <Grid container className={classes.imageContainer}>
                            {/* Image preview */}
                                <Grid item xs={8}>
                                        <img className={classes.image} src={thumbnail}/>   
                                        {/* <div><p className={classes.thumbnailText}>Thumbnail</p></div>  */}
                                </Grid>
                                <Grid item xs={4}>
                                <Button
                                  variant="contained"
                                  component="label"
                                  className={classes.button}
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Select thumbnail
                                  <input
                                    type="file"
                                    hidden
                                    onChange={handelSelection}
                                  />
                                </Button>
                                </Grid>
                            </Grid>
                            </Grid>
                            

                        </Grid>
                </Grid>
            </Grid>

            <Grid container>
            <Grid item xs={12}>
                <div className={classes.selectBtnForGallaryImages} >
                    <h3>Gallary</h3>
                            <Button
                                  variant="contained"
                                  component="label"
                                  
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Select Image
                                  <input
                                    type="file"
                                    hidden
                                    onChange={handSelectImagesForGallary}
                                  />
                            </Button>
                </div>   
                <Box style={{overflow: 'auto',height:500, width: '100%', border: '1px solid black'}}>
                <div className={classes.rootList}>
                      <ImageList rowHeight={260} className={classes.imageList} cols={3}>
                        {gallaryImages.map((item,listIndex) => (
                        
                          <ImageListItem key={item.img} cols={item.cols || 1}>
                                    <Card className={classes.root}>
                                      <CardHeader
                                        
                                        action={
                                          <IconButton aria-label="settings">
                                            <div>
                                               <IconButton
                                                 aria-label="more"
                                                 aria-controls="long-menu"
                                                 aria-haspopup="true"
                                                 onClick={handleClick}
                                               >
                                                 <MoreVertIcon />
                                               </IconButton>
                                               <Menu
                                                 id="long-menu"
                                                 anchorEl={anchorEl}
                                                 keepMounted
                                                 open={open}
                                                 onClose={handleClose}
                                                 PaperProps={{
                                                   style: {
                                                     maxHeight: ITEM_HEIGHT * 4.5,
                                                     width: '20ch',
                                                   },
                                                 }}
                                               >
                                                 {options.map((option,index) => (
                                                   <MenuItem key={option} selected={option === 'Pyxis'} onClick={(e)=>{
                                                            handleClose(e,item);
                                                   }}>
                                                     {option}
                                                   </MenuItem>
                                                 ))}
                                               </Menu>
                                             </div>
                                          </IconButton>
                                        }
                                       
                                      />
                                      <CardMedia
                                        className={classes.media}
                                        image={item.img}
                                        title="Paella dish"
                                      />
                                    </Card>

                          </ImageListItem>
                        ))}
                      </ImageList>
                </div>
                                
                </Box>    
                
                </Grid>
            </Grid>
            <div className={classes.bottomBtn}>
                    <Button 
                    className={classes.addBtn} 
                    variant="contained"
                    color="primary" 
                    >
                      Update Changes
                    </Button>
            </div>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    leftSide:{
        // backgroundColor:"blue"
    }
    ,
    rightSide:{
        // backgroundColor:"green"
    },
    textFields:{
        marginTop:'3%'
    },
    multilineTextField:{
        marginTop:"3%",
        width:'80%'
    },
    rootChips: {
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginTop: 0, 
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      imageContainer:{
        // backgroundColor:"green",
        width:'100%',
        height:230,
        marginTop:'10%',
        // border: '1px solid black'
    },
    button:{
        marginTop:'5%',
        marginLeft:'10%',
        width:150

    },
    imageList: {
        width: '100%',
        
      },
    image:{
        resize:'contain',
        width:250,
        height:230,
    },
    thumbnailText:{
        marginLeft:'120%'
    },
    keyWordsInputContainer:{
        paddingBottom:'5%'
    },
    selectBtnForGallaryImages:{
        paddingBottom:'2%'
    },
    root: {
        maxWidth: '90%',
        height:250
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      avatar: {
        backgroundColor: red[500],
      },
      bottomBtn:{
          marginTop:'3%',
          marginLeft:"35%"
      },
      visibilityControl:{
          marginTop:'5%',
          marginLeft:"5%",
          border:'1px solid black',
          height:100,
          paddingLeft:"20%",
          paddingTop:"8%"
      }
}))
export default PreviewProjectTab;