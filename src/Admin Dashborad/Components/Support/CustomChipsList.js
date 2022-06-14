import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
/**
 const [listOfOptions_ForChipList, setListOfOptions_ForChipList] = React.useState([
        { key: 0,type:"ByRating",data:"4", label: '4 Stars' },
        { key: 1,type:"ByPrice",data:"40,100", label: 'Min 40 $ and Max 100$' },
        { key: 2,type:"ByPrice",data:"23,20", label: 'Min 23$ and Max 20$' },
        { key: 3,type:"ByDate",data:"Fri Aug 27 2021 20:22:44 GMT+0500 (Pakistan Standard Time)", label: 'Fri Aug 27 2021 20:22:44 GMT+0500 (Pakistan Standard Time)' },
        { key: 4,type:"ByRating",data:'2', label: '2 Stars' },
      ]);
      
      when calling 

      <CustomChipsList canDelete={true} value={listOfOptions_ForChipList} setValue={setListOfOptions_ForChipList}/>
            
 */
function CustomChipsList({canDelete=true,...props}) {
    const classes = useStyles();
    

    const handleDelete = (chipToDelete) => () => {
      if(canDelete)
      {
        props.setValue((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
      }
    };
    
    return (
      <div component="ul" className={classes.root}>
        {props.value.map((data) => {
          let icon;
  
          if (data.label === 'React') {
            icon = <TagFacesIcon />;
          }
          return (
            <li key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={handleDelete(data)}
                className={classes.chip}
              />
            </li>
          );
        })}
      </div>
    )
  
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));  
export default CustomChipsList;