import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import produce from 'immer';
import Skeleton from '@material-ui/lab/Skeleton';
import {Button} from '@mui/material'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAll, selectListOfOders, selectListOfOffers } from '../Redux Components/Selectors';
import {loadListOfOffers,loadListOfOrders} from '../Redux Components/Thunks'
import { fontFamily } from '../../../../Theme/fonts';
function createDataForLinkedAccountTable(AccountType, UserName) {
    return {AccountType,UserName};
}
  
function createDataForOffers(id, placementDate, status) {  
    return { id, placementDate, status};
  }

function createDataForOrders(id, catagory, subCatagory,price,status) {  
    return { id, catagory, subCatagory,price,status};
  }

const columnsForListOfOffersTable = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'placementDate', label: 'Placement Date', minWidth: 200, },
    { id: 'status', label: 'Status', minWidth: 200 },
  ];

  const columnsForListOfOrdersTable = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'catagory', label: 'Catagory', minWidth: 100 },
    { id: 'subCatagory', label: 'Sub catagory', minWidth: 100 },
    { id: 'price', label: 'Final Price', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
  ];  

function ViewUserAccount(props) {
    const [rowsForLinkedAccountTable,setRowsForLinkedAccountTable]=useState([]);
    const [rowsForOffersListTable,setRowsForOffersListTable]=useState([]);
    const [rowsForOdersListTables,setRowsForOdersListTable]=useState([]);
    const [pageForOffersTable, setpageForOffersTable] = React.useState(0);
    const [rowsPerpageForOffersTable, setRowsPerpageForOffersTable] = React.useState(10);
    const [pageForOdersTable, setpageForOdersTable] = React.useState(0);
    const [rowsPerpageForOdersTable, setRowsPerpageForOdersTable] = React.useState(10);
  

    const dispatch = useDispatch();
    const listOfOrders_FromStore = useSelector(selectListOfOders);
    const listOfOffers_FromStore = useSelector(selectListOfOffers);
    
    const {isLoading_loadListOfOrders,isLoading_loadListOfOffers}  = useSelector(selectAll);
   
    useEffect(()=>{
      setRowsForOdersListTable(produce(rowsForOdersListTables,draft=>{
        draft=[];
        return draft;
      }))
      setRowsForOffersListTable(produce(rowsForOffersListTable,draft=>{
        draft=[];
        return draft;
      }))

        setRowsForLinkedAccountTable(produce(rowsForLinkedAccountTable,draft=>{
            draft=[];
            props.selectedUserAccount.otherLinkedAccounts.forEach(element => {
            draft.push(createDataForLinkedAccountTable(element.accountType,element.accountUserName))    
            });
            return draft;
        }));      
    },[]);
    useEffect(()=>{
        setRowsForOffersListTable(produce(rowsForOffersListTable,draft=>{
            draft=[];
            listOfOffers_FromStore.forEach(element => {
            draft.push(createDataForOffers(element.requestId,element.requestPlacementDate,element.requestStatus))    
            });
            return draft;
        }))

    },[listOfOffers_FromStore])  

    useEffect(()=>{
        setRowsForOdersListTable(produce(rowsForOdersListTables,draft=>{
            draft=[];
            listOfOrders_FromStore.forEach(element => {
            draft.push(createDataForOrders(element.orderId,element.selectedService, element.selectedSubService,element.orderEstimatedPrice,element.orderStatus))    
            });
            return draft;
        }))

    },[listOfOrders_FromStore])  

  const handelLoadOffersList=()=>{
      dispatch(loadListOfOffers())
  }  
  const handelLoadOdersList=()=>{
     dispatch(loadListOfOrders())
  }

  const handleChangepageForOffersTable = (event, newpageForOffersTable) => {
    setpageForOffersTable(newpageForOffersTable);
  };

  const handleChangeRowsPerpageForOffersTable = (event) => {
    setRowsPerpageForOffersTable(+event.target.value);
    setpageForOffersTable(0);
  };


  const handleChangepageForOdersTable = (event, newpageForOdersTable) => {
    setpageForOdersTable(newpageForOdersTable);
  };

  const handleChangeRowsPerpageForOdersTable = (event) => {
    setRowsPerpageForOdersTable(+event.target.value);
    setpageForOdersTable(0);
  };

    return (
        <div>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{border:lightBorder,padding:'1rem'}}>
                    {/* Profile and bio */}
                    <Grid container >
                        <Grid item xs={8}>
                            <div style={{paddingBottom:'1rem'}}>
                                <Headings text={"Bios"} fontSize={25} fontWeight={'bolder'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`First Name: ${props.selectedUserAccount.firstName}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Last Name: ${props.selectedUserAccount.lastName}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`User Name: ${props.selectedUserAccount.userName}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Email: ${props.selectedUserAccount.email}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Phone: ${props.selectedUserAccount.phone}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Countary: ${props.selectedUserAccount.countary}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Total Ammount of purchase: ${props.selectedUserAccount.totalAmmountSpent}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Account Running Status: ${props.selectedUserAccount.accountRunningStatus}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Account Completeness Status: ${props.selectedUserAccount.accountCompletenessStatus}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`lastSeen: ${props.selectedUserAccount.lastSeen}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Account Creation Date and Time: ${props.selectedUserAccount.accountCreationDate} @ ${props.selectedUserAccount.accountCreationTime}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Last Login: ${props.selectedUserAccount.lastLoginDate} @ ${props.selectedUserAccount.lastLoginTime}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            <div style={{borderBottom:lightBorder,borderRight:lightBorder}}>
                                <Headings text={`Date and time of  block: ${props.selectedUserAccount.dateOfBlock} @ ${props.selectedUserAccount.timeOfBlock}`} fontSize={18} fontWeight={'bold'}/>
                            </div><div style={{borderBottom:lightBorder,borderRight:lightBorder,backgroundColor:'red'}}>
                                <Headings text={`Reason of block: ${props.selectedUserAccount.reasonOfBlock}`} fontSize={18} fontWeight={'bold'}/>
                            </div>
                            
                        </Grid>
                        <Grid item xs={4}>
                            {/* Profile pic and some controls. */}
                            <div style={{textAlign:'center',marginTop:'3rem'}}>
                                <img width={200} height={200} src={props.selectedUserAccount.profileImage}/>
                            </div>
                            {/* <div style={{textAlign:"center",marginTop:'1rem'}}>
                            <RoundButton
                                      title={"Suspend Account"}
                                      width={200}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                          alert("Call the API which will suspend the account..")
                                      }}
                                     />
                            </div>
                            <div style={{textAlign:"center",marginTop:'1rem'}}>
                            <RoundButton
                                      title={"Block Account"}
                                      width={200}
                                      color={colors.white}
                                      bgColor={colors.secondary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                        alert("Call the API which will block the account..")
                                    }}
                                     />
                            </div> */}
                            <div style={{textAlign:"center",marginTop:'1rem'}}>
                            <RoundButton
                                      title={"View"}
                                      width={100}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                        alert("Open on buyers pageForOffersTable...")
                                    }}
                                     />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{border:lightBorder,padding:'1rem',marginTop:'2rem'}}>
                        {/*  */}
                        <div style={{paddingBottom:'1rem'}}>
                                <Headings text={"Payment methods [Will be designed as per the form which we will show while adding payment method.]"} fontSize={25} fontWeight={'bolder'}/>
                        </div>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{border:lightBorder,padding:'1rem',marginTop:'2rem'}}>
                        {/*  */}
                        <div style={{paddingBottom:'1rem'}}>
                                <Headings text={"Linked Accounts"} fontSize={25} fontWeight={'bolder'}/>
                        </div>
                        <div>
                        <TableContainer>
                               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                 <TableHead>
                                   <TableRow>
                                     <TableCell style={{fontFamily,fontSize:20,fontWeight:'bold' }}>Account Type</TableCell>
                                     <TableCell style={{fontFamily,fontSize:20,fontWeight:'bold' }}>Account user name</TableCell>
                                   </TableRow>
                                 </TableHead>
                                 <TableBody>
                                   {rowsForLinkedAccountTable.map((row) => (
                                     <TableRow
                                       key={row.AccountType}
                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                     >
                                       <TableCell component="th" scope="row" style={{fontFamily,fontSize:17,fontWeight:'' }}>
                                         {row.AccountType}
                                       </TableCell>
                                       <TableCell style={{fontFamily,fontSize:17,fontWeight:'' }}>{row.UserName}</TableCell>
                                      
                                     </TableRow>
                                   ))}
                                 </TableBody>
                               </Table>
                             </TableContainer>
                </div>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{border:lightBorder,padding:'1rem',marginTop:'2rem'}}>
                        {/*  */}
                        <div style={{paddingBottom:'1rem',position:'relative'}}>
                                <Headings text={"Offers"} fontSize={25} fontWeight={'bolder'}/>
                                <div style={{position:'absolute',top:0,right:'1rem'}}>
                                <Button variant="outlined" onClick={handelLoadOffersList}>Load data</Button>
                                </div>

                                 {
                                            (rowsForOffersListTable.length===0 && isLoading_loadListOfOffers===false) ? (
                                                <div>
                                                    <Headings text={"No data found.."}/>
                                                </div>
                                            ):(
                                                <div>
                                                {
                                                    (isLoading_loadListOfOffers===true) ? (
                                                        <div style={{textAlign:'center'}}>
                                                                <Skeleton />
                                                                <Skeleton />
                                                                <Headings text={"Fetching offers..."} fontSize={30}/>
                                                                <Skeleton />
                                                                <Skeleton />
                                                        </div>
                                                    ):(
                                                        
                                        <div>
                                        
                                        {/* Data */}
                                        <TableContainer sx={{ maxHeight: 440 }}>
                                            <Table stickyHeader aria-label="sticky table">
                                              <TableHead>
                                                <TableRow>
                                                  {columnsForListOfOffersTable.map((column) => (
                                                    <TableCell
                                                      key={column.id}
                                                      align={column.align}
                                                      style={{ minWidth: column.minWidth,fontFamily:fontFamily,fontSize:20,fontWeight:'bold' }}
                                                    >   
                                                      {column.label}
                                                    </TableCell>
                                                  ))}
                                                </TableRow>
                                              </TableHead>
                                              <TableBody>
                                               
                                            {rowsForOffersListTable
                                                  .slice(pageForOffersTable * rowsPerpageForOffersTable, pageForOffersTable * rowsPerpageForOffersTable + rowsPerpageForOffersTable)
                                                  .map((row) => {
                                                    return (
                                                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                        {columnsForListOfOffersTable.map((column) => {
                                                          const value = row[column.id];
                                                          return (
                                                            
                                                            <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{ minWidth: column.minWidth,fontFamily:fontFamily,fontSize:17,fontWeight:'' }}
                                                            >   
                                                               {value}
                                                             </TableCell>
                                                          );
                                                        })}
                                                      </TableRow>
                                                    );
                                                  })}
                                              </TableBody>
                                            </Table>
                                          </TableContainer>
                                          <TablePagination
                                            rowsPerpageForOffersTableOptions={[10, 25, 100]}
                                            component="div"
                                            count={rowsForOffersListTable.length}
                                            rowsPerpageForOffersTable={rowsPerpageForOffersTable}
                                            pageForOffersTable={pageForOffersTable}
                                            onpageForOffersTableChange={handleChangepageForOffersTable}
                                            onRowsPerpageForOffersTableChange={handleChangeRowsPerpageForOffersTable}
                                          />
                                        </div>
                                                    )
                                                }
                                                </div>
                                            )
                                        }


                                                    </div>
                </Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{border:lightBorder,padding:'1rem',marginTop:'2rem'}}>
                        {/*  */}
                        <div style={{paddingBottom:'1rem',position:'relative'}}>
                                <Headings text={"Orders"} fontSize={25} fontWeight={'bolder'}/>
                                <div style={{position:'absolute',top:0,right:'1rem'}}>
                                <Button variant="outlined" onClick={handelLoadOdersList}>Load data</Button>
                                </div>

                                {
                                            (rowsForOdersListTables.length===0 && isLoading_loadListOfOrders===false) ? (
                                                <div>
                                                    <Headings text={"No data found.."}/>
                                                </div>
                                            ):(
                                                <div>
                                                {
                                                    (isLoading_loadListOfOrders===true) ? (
                                                        <div style={{textAlign:'center'}}>
                                                                <Skeleton />
                                                                <Skeleton />
                                                                <Headings text={"Fetching Orders..."} fontSize={30}/>
                                                                <Skeleton />
                                                                <Skeleton />
                                                        </div>
                                                    ):(
                                                        
                                        <div>
                                        
                                        {/* Data */}

                                        <TableContainer sx={{ maxHeight: 440 }}>                         
                                         <Table stickyHeader aria-label="sticky table">
                                           <TableHead>
                                             <TableRow>
                                               { columnsForListOfOrdersTable.map((column) => (
                                                 <TableCell
                                                   key={column.id}
                                                   align={column.align}
                                                   style={{ minWidth: column.minWidth,fontFamily:fontFamily,fontSize:20,fontWeight:'bold' }}
                                                 >
                                                   {column.label}
                                                 </TableCell>
                                               ))}
                                             </TableRow>
                                           </TableHead>
                                           <TableBody>
                                             {rowsForOdersListTables
                                               .slice(pageForOdersTable * rowsPerpageForOdersTable, pageForOdersTable * rowsPerpageForOdersTable + rowsPerpageForOdersTable)
                                               .map((row) => {
                                                 return (
                                                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                     { columnsForListOfOrdersTable.map((column) => {
                                                       const value = row[column.id];
                                                       return (
                                                        <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth,fontFamily:fontFamily,fontSize:17,fontWeight:'' }}
                                                        >   
                                                           {value}
                                                         </TableCell>
                                                       );
                                                     })}
                                                   </TableRow>
                                                 );
                                               })}
                                           </TableBody>
                                         </Table>
                                       </TableContainer>
                                       <TablePagination
                                         rowsPerpageForOdersTableOptions={[10, 25, 100]}
                                         component="div"
                                         count={rowsForOdersListTables.length}
                                         rowsPerpageForOdersTable={rowsPerpageForOdersTable}
                                         pageForOdersTable={pageForOdersTable}
                                         onpageForOdersTableChange={handleChangepageForOdersTable}
                                         onRowsPerpageForOdersTableChange={handleChangeRowsPerpageForOdersTable}
                                       />

                                        </div>
                                                    )
                                                }
                                                </div>
                                            )
                                        }


                        </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    );
}

export default ViewUserAccount;