import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import {TableRow,Image,Button} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
function PackageComparator(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
             <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.verticalLine} width={20} >Packages</TableCell>
            <TableCell className={classes.verticalLine}  align="left">
                <h2>₨5,121</h2>
                <h3>Basic</h3>
                <h4> REACT NATIVE CONSULTATION</h4>   
                <h5>One ZOOM call session for upto 45 minutes. I will provide my consultation and discuss your project</h5>
            </TableCell>
            <TableCell className={classes.verticalLine} align="left">
                <h2>₨5,121</h2>
                <h3>Basic</h3>
                <h4> REACT NATIVE CONSULTATION</h4>   
                <h5>One ZOOM call session for upto 45 minutes. I will provide my consultation and discuss your project</h5>
            </TableCell>
            <TableCell className={classes.verticalLine} align="left">
            <h2>₨5,121</h2>
                <h3>Basic</h3>
                <h4> REACT NATIVE CONSULTATION</h4>   
                <h5>One ZOOM call session for upto 45 minutes. I will provide my consultation and discuss your project</h5>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {iconData.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.verticalLine} component="th" scope="row">
                  {row.name}
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
                  {(row.packageBasic) ? <FontAwesomeIcon size="lg" icon={faCheckCircle} /> : <FontAwesomeIcon size="lg" icon={faWindowClose} />}
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
              {(row.packageStandard) ? <FontAwesomeIcon size="lg" icon={faCheckCircle} /> : <FontAwesomeIcon size="lg" icon={faWindowClose} />}
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
              {(row.packagePremium) ? <FontAwesomeIcon size="lg" icon={faCheckCircle} /> : <FontAwesomeIcon size="lg" icon={faWindowClose} />}
              </TableCell>
            </TableRow>
          ))}
          {stringData.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.verticalLine} component="th" scope="row">
                  {row.name}
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
                  {row.packageBasic}
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
              {row.packageBasic}
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
              {row.packageBasic}
              </TableCell>
            </TableRow>
          ))}
          {totalPrice.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.verticalLine} component="th" scope="row">
                  {row.name}
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
                  <div>
                    <div className={classes.totalPriceTextContainer}>
                    {row.packageBasic}
                    </div>  
                    <Button
                    variant="contained"
                    color="primary"
                    >Select</Button>
                  </div>
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
              <div>
                    <div className={classes.totalPriceTextContainer}>
                    {row.packageStandard}
                    </div>  
                    <Button
                    variant="contained"
                    color="primary"
                    >Select</Button>
                </div>  
              </TableCell>
              <TableCell className={classes.verticalLine} align="center">
              <div>
                    <div className={classes.totalPriceTextContainer}>
                    {row.packagePremium}
                    </div>  
                    <Button
                    variant="contained"
                    color="primary"
                    >Select</Button>
                </div>  
              </TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}

function createData(name, packageBasic, packageStandard, packagePremium) {
    return { name, packageBasic, packageStandard, packagePremium };
  }
  
  const iconData = [
    createData('App Icon', true, true,true),
    createData('Splash Screen', false,true,true),
    createData('Include Source Code',false,false,true),
    createData('Mobile Operating Systems',true, true,true),
  ];
  const stringData = [
    createData('Delivery time',"2 days","1 week","1 month"),
  ];
  const totalPrice = [
    createData('Total',"13222","13211","32212"),
  ]
  

const useStyles = makeStyles((theme) => ({
   container:{
     paddingBottom:'5%',
     paddingTop:"4%"
   },
   table: {
    minWidth: 650,
  },
  verticalLine:{
    borderRight: `2px solid ${theme.palette.divider}`,
    borderLeft: `2px solid ${theme.palette.divider}`,
    borderTop: `2px solid ${theme.palette.divider}`,
    
  },
  totalPriceTextContainer:{
      paddingBottom:"3%"
  }
  }));
  
export default PackageComparator;