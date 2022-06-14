
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: "black",
    },
    footer:{
      bottom:0,
      width:'100%',
      backgroundColor:"#011c38"
    },
    serviceDescriptionDiv:{
      backgroundColor:"#f8f9fa"
    }
  }));

export default useStyles;