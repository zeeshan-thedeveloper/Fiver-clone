import { Card, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TextMessageHolder from './TextMessageHolder'
import VideoMessageHolder from './VideoMessageHolder'
import FileMessageHolder from './FileMessageHolder'
import ImageMessageHolder from './ImageMessageHolder'
import OfferMessageHolder from './OfferMessageHolder'
import StartOfChat from './StartOfChat'

import useWindowDimensions from '../../useWindowDimensions';

import { lightBorder } from '../../../../Theme/borders';

function ChatList(props) {
    const {height,width}=useWindowDimensions();
    const [chatData,setChatData]=useState([
        {
            messageType:'start',//file//image/video/offer/anycomponent.
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'recieved',//recieved//sent
            messageCreatorName:"Zeeshan",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"Hey.. whats up",
            messageCreatorThumbnail:"https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1"
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'sent',//recieved//sent
            messageCreatorName:"CodeINDNA",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"Hey.. i am fine .. what about you..",
            messageCreatorThumbnail:"https://img.icons8.com/fluency/48/000000/biotech.png"
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'recieved',//recieved//sent
            messageCreatorName:"Zeeshan",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"I am fine too..",
            messageCreatorThumbnail:"https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1"
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'sent',//recieved//sent
            messageCreatorName:"CodeINDNA",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"well what do you want from us",
            messageCreatorThumbnail:"https://img.icons8.com/fluency/48/000000/biotech.png"
        },
        {
            messageId:"4934M",
            messageType:'image',//file//image/video/offer/anycomponent.
            messageWay:'sent',//recieved//sent
            messageCreatorName:"CodeINDNA",
            messageContent:"Here are the images",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageImages:[
                {
                    imageId:'1',
                    imageTitle:'mydesign.jpg',
                    imageUrl:'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg',

                },
                {
                    imageId:'2',
                    imageTitle:'yourdesign.jpg',
                    imageUrl:'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg',

                },
                
            ],

            messageCreatorThumbnail:"https://img.icons8.com/fluency/48/000000/biotech.png"
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'sent',//recieved//sent
            messageCreatorName:"CodeINDNA",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"well chech this out",
            messageCreatorThumbnail:"https://img.icons8.com/fluency/48/000000/biotech.png"
        },
        {
            messageId:"4934M",
            messageType:'video',//file//image/video/offer/anycomponent.
            messageWay:'sent',//recieved//sent
            messageCreatorName:"CodeINDNA",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"Herea the videos",
            messageVideos:[
                {
                    videoId:'1',
                    videoTitle:'myvide.mp4',
                    videoUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    videoThumbnail:"https://www.soulaca.com/assets/images/video.png"
      
                },
                {
                    videoId:'1',
                    videoTitle:'myvide.mp4',
                    videoUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    videoThumbnail:"https://www.soulaca.com/assets/images/video.png"
      
                },
                {
                    videoId:'1',
                    videoTitle:'myvide.mp4',
                    videoUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    videoThumbnail:"https://www.soulaca.com/assets/images/video.png"
      
                },
                {
                    videoId:'2',
                    videoTitle:'tes.mp4',
                    videoUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    videoThumbnail:"https://www.soulaca.com/assets/images/video.png"
           },
                
            ],

            messageCreatorThumbnail:"https://img.icons8.com/fluency/48/000000/biotech.png"
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'recieved',//recieved//sent
            messageCreatorName:"Zeeshan",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"Fine can you share code files now..",
            messageCreatorThumbnail:"https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1"
        },
        {
            messageId:"4934M",
            messageType:'file',//file//image/video/offer/anycomponent.
            messageWay:'sent',//recieved//sent
            messageCreatorName:"CodeINDNA",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageFiles:[
                {
                    fileId:'1',
                    fileTitle:'myfile.zip',
                    fileUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    fileType:"zip"//txt//doc//java//cpp//
               
                },
                {
                    fileId:'2',
                    fileTitle:'myfile.txt',
                    fileUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    fileType:"txt"//txt//doc//java//cpp//
                },
                {
                    fileId:'2',
                    fileTitle:'myfile.doc',
                    fileUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    fileType:"docx"//txt//doc//java//cpp//
                },
                {
                    fileId:'2',
                    fileTitle:'myfile.java',
                    fileUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    fileType:"java"//txt//doc//java//cpp//
                },
                {
                    fileId:'2',
                    fileTitle:'myfile.java',
                    fileUrl:'https://www.youtube.com/watch?v=74cVT_tUpck',
                    fileType:"js"//txt//doc//java//cpp//
                },
            ],
            messageContent:'Here are the files',
            messageCreatorThumbnail:"https://img.icons8.com/fluency/48/000000/biotech.png"
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'recieved',//recieved//sent
            messageCreatorName:"Zeeshan",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"Please create the custom offer",
            messageCreatorThumbnail:"https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1"
        },
        {
            messageId:"4934M",
            messageType:'offer',//file//image/video/offer/anycomponent.
            messageWay:'sent',//recieved//sent
            messageCreatorName:"CodeINDNA",
            messageContent:"Here is your custom offer.",
            offerServiceTitle:"I will do fullstack development in react, javascript, and nod",
            offerPrice:"50$",
            offerDesc:"Hi there, We will develop website for you using MERN technology, please accept to proceed.Thanks",
            offerStatus:"Pending",
            offerFeature:[
                {
                    featureId:'1',
                    feature:"20 Revisions"
                },
                {
                    featureId:'2',
                    feature:"Database integration"
                },
                {
                    featureId:'3',
                    feature:"Detailed Comments"
                },
                {
                    featureId:'4',
                    feature:"Set up files"
                }
            ],
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageCreatorThumbnail:"https://img.icons8.com/fluency/48/000000/biotech.png"
        },
        {
            messageId:"4934M",
            messageType:'text',//file//image/video/offer/anycomponent.
            messageWay:'recieved',//recieved//sent
            messageCreatorName:"Zeeshan",
            messageCreationTimeAndDate:"Sep 19, 4:55 PM",
            messageContent:"Please create the custom offer",
            messageCreatorThumbnail:"https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1"
        },

    ]);
    return (
       <Card
        elevation={0}
        style={{borderRight:lightBorder,height:height*0.43}}
       >
           <CardContent>
               <div style={{height:height*0.43,overflowY:'auto',marginTop:'-1rem'}}>
                   {
                       chatData.map((message,index)=>{
                           switch (message.messageType) {
                               case "text":
                                   return  <TextMessageHolder message={message}/>
                                   break;
                                case "file":
                                   return <FileMessageHolder message={message}/>
                                   break;
                                case "image":
                                   return <ImageMessageHolder message={message}/>
                                    break;
                                case "video":
                                   return <VideoMessageHolder message={message}/>
                                    break;
                                case "offer":
                                   return <OfferMessageHolder message={message}/>
                                    break;
                               default:
                                   return <StartOfChat message={message}/>
                                   break;
                           }
                       })
                   }
               </div>
           </CardContent>
       </Card>
    );
}

export default ChatList;