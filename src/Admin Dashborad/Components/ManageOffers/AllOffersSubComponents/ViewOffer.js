import React from 'react';
import {Grid} from '@material-ui/core'
import {lightBorder} from '../../../../Theme/borders'
import {Headings} from '../../Support/Headings'
function ViewOffer(props) {
  return (
    <div>
     <Grid container>
              <Grid item xs={12}>
                {/* Profile */}
                  <div >
                    <img height={150} width={300} src={props.selectedOffer.offerImage}/>
                  </div>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} style={{marginTop:'1rem'}}> 
                    {/* Name */}
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`ID : ${props.selectedOffer.offerId} `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Punch  Line : ${props.selectedOffer.offerPunchLine}  `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Catagory : ${props.selectedOffer.offerCatagory}  `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Sub Catagory : ${props.selectedOffer.offerSubCatagory}  `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Creation date : ${props.selectedOffer.offerCreationDate}  `} fontSize={18} fontWeight={'bold'} />
                    </div>

                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Status: ${props.selectedOffer.offerStatus}  `} fontSize={18} fontWeight={'bold'} />
                    </div>
                    <div style={{borderBottom:lightBorder}}>
                     <Headings text={`Number Of hits: ${props.selectedOffer.numberOfHits}  `} fontSize={18} fontWeight={'bold'} />
                    </div>
        
                  </Grid>
                 </Grid>
              </Grid>
            </Grid>
    </div>
  );
}

export default ViewOffer;