import React from 'react';
import { useState } from 'react';
import ContactHolder from './ContactHolder';
import CustomScroll from 'react-custom-scroll';
import useWindowDimensions from '../../useWindowDimensions';

function ContactList(props) {
    const {height,width}=useWindowDimensions();
    const [contactList,setContactList]=useState([
        {
            contactId:'1',
            contactThumbnail:'https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1',
            contactLastMessageTime:'4 day',
            contactName:'Zeeshan',
            contactLastMessage:"Hey how are you and what are you doig now days"
        },
        {
            contactId:'2',
            contactThumbnail:'https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1',
            contactLastMessageTime:'9 day',
            contactName:'Nadir',
            contactLastMessage:"Hey how are you...."
        },
        {
            contactId:'3',
            contactThumbnail:'https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1',
            contactLastMessageTime:'2 day',
            contactName:'Nigeeta',
            contactLastMessage:"Hey how are you...."
        },
        {
            contactId:'4',
            contactThumbnail:'https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1',
            contactLastMessageTime:'2 day',
            contactName:'Nigeeta',
            contactLastMessage:"Hey how are you...."
        },
        {
            contactId:'5',
            contactThumbnail:'https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1',
            contactLastMessageTime:'2 day',
            contactName:'Nigeeta',
            contactLastMessage:"Hey how are you...."
        },
        {
            contactId:'6',
            contactThumbnail:'https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1',
            contactLastMessageTime:'2 day',
            contactName:'Nigeeta',
            contactLastMessage:"Hey how are you...."
        }
    ])
    return (

        <div style={{height:height*0.58,overflowY:'auto'}}>
            {
                contactList.map((contact,index)=>{
                    return <ContactHolder contact={contact}/>
                })
            }
        </div>
    );
}

export default ContactList;