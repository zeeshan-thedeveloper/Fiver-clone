import Icon from "@mui/icons-material/AccessAlarms";
import ServiceImage from "../../Resources/java1.jpg";
import ServiceImage2 from "../../Resources/java2.png";
import ServiceImage3 from "../../Resources/python1.jpg";

//All orders when clicked on Orders from Dashboard
export const allOrders = [
  {
    orderId: "P45SA$JK1",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    service_project_thumbnail:ServiceImage,  //
    dueOn: new Date().toLocaleDateString(),
    deliveredOn: new Date().toLocaleDateString(),
    status: "newest",
  },
  {
    orderId: "P45SA$JK2",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    service_project_thumbnail:ServiceImage2,  //
    dueOn: new Date().toLocaleDateString(),
    deliveredOn: new Date().toLocaleDateString(),
    status: "active",
  },
  {
    orderId: "P45SA$JK3",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    service_project_thumbnail:ServiceImage,  //
    dueOn: new Date().toLocaleDateString(),
    deliveredOn: new Date().toLocaleDateString(),
    status: "late",
  },
  {
    orderId: "P45SA$JK4",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    service_project_thumbnail:ServiceImage3,  //
    dueOn: new Date().toLocaleDateString(),
    deliveredOn: new Date().toLocaleDateString(),
    status: "completed",
  },
  {
    orderId: "P45SA$JK5",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    service_project_thumbnail:ServiceImage2,  //
    dueOn: new Date().toLocaleDateString(),
    deliveredOn: new Date().toLocaleDateString(),
    status: "delivered",
  },
  {
    orderId: "P45SA$JK6",
    totalPrice: 251,
    seller: "CodeinDNA",
    service_project_title: "Get a MERN app",
    service_project_thumbnail:ServiceImage,  //
    dueOn: new Date().toLocaleDateString(),
    deliveredOn: new Date().toLocaleDateString(),
    status: "cancelled",
  },
];

export const availableBalance = 40;

export const purchaseHistory = [
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 8,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 9,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 10,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
  {
    orderId: "P4545S45457",
    purchaseTitle: "MERN website for business",
    purchaseMonth: 11,
    purchaseDay: 12,
    purchaseYear: 2021,
    purchaseTime: "12:00 PM",
    costPaid: 142,
  },
];

//---------------------------------------

//Userdashboard->settings->notifications

export let mobileNotificationSettingsData = [
    {
        content:"Inbox Messages",
        permission:true,
    },
    {
        content:"Order Messages",
        permission:false,
    },
    {
        content:"Order Updates",
        permission:false,
    },
    {
        content:"Offers by Codeindna",
        permission:true,
    },
    {
        content:"My Account",
        permission:true,
    },
    {
        content:"Help and support by Codeindna",
        permission:false,
    },
]
 
export let desktopNotificationSettingsData = [
    {
        content:"Inbox Messages",
        permission:true,
    },
    {
        content:"Order Messages",
        permission:true,
    },
    {
        content:"Order Updates",
        permission:true,
    },
    {
        content:"Offers by Codeindna",
        permission:true,
    },
    {
        content:"My Account",
        permission:true,
    },
    {
        content:"Help and support by Codeindna",
        permission:false,
    },
]

export let emailNotificationSettingsData = [
    {
        content:"Inbox Messages",
        permission:true,
    },
    {
        content:"Order Messages",
        permission:true,
    },
    {
        content:"Order Updates",
        permission:true,
    },
    {
        content:"Offers by Codeindna",
        permission:true,
    },
    {
        content:"My Account",
        permission:true,
    },
    {
        content:"Help and support by Codeindna",
        permission:false,
    },
]

//---------------------------------------

export const dashboardNotificationsData = [
  {
    notificationId: "P455558S",
    content: "Payment method added",
    icon: <Icon />,
    deliveryDate: new Date().toLocaleDateString(),
    deliveryTime: new Date().toLocaleDateString(),
    route:"/"
  },
  {
    notificationId: "P455548S",
    content: "Mobile number added",
    icon: <Icon />,
    deliveryDate: new Date().toLocaleDateString(),
    deliveryTime: new Date().toLocaleDateString(),
    route:"/"
    },
  {
    notificationId: "P455548S",
    content: "Mobile number added",
    icon: <Icon />,
    deliveryDate: new Date().toLocaleDateString(),
    deliveryTime: new Date().toLocaleDateString(),
    route:"/"
    },
];


export const securityQuestionData={
  question:"What was name of your first Primary School?",
  answer:"Govt. BPS LA"
}

export const passwordData={
  userPassword:"_nzn#$#$#$1",
}

//When clicked on view Order, we need to fetch these details of an order given that orderId
export const orderDetails={
    orderId: "P4545S45457",
    userRequirement:"Greetings, I want to get my website developed using MERN tech.",
    service_project_id:'#S454545P', 
    service_project_title: "Get a Clone website/app",
    date: new Date().toLocaleDateString() ,//This date is delivery data in case of complete, late: while post date in case of active, new cancelled
    totalPrice: 149,
    status:'Ongoing',
    quantity:3,
    packageOffers:[
      "Application Audit",
      "Project Plan",
      "Cost Estimation",
      "45 Minutes Consultation",
      "10 Questions Answered"
    ],
    durationDays:7,
    orderChat:'Get 30 msgs from database' //Maybe array of objects
}


export const previousPosts=[
  {
    postId:'#P454545',
    requirement:'Need an Amazon Clone web app',
    postedOn:new Date().toLocaleDateString(),
    status:'open',
    seenByDNA:true,
  },
  {
    postId:'#P454547',
    requirement:'Required an Amazon Clone web app',
    postedOn:new Date().toLocaleDateString(),
    status:'closed',
    seenByDNA:false,
  },{
    postId:'#P454548',
    requirement:'Urgent- an Amazon Clone web app',
    postedOn:new Date().toLocaleDateString(),
    status:'filled',
    seenByDNA:true,
  },
  {
    postId:'#P454549',
    requirement:'If possible, need an Amazon Clone web app',
    postedOn:new Date().toLocaleDateString(),
    status:'draft',
    seenByDNA:true,
  }
]

/**
 * 
 * If status is 'draft'-> allow user to post again, else don't
 */

export const previousPostDetails={
  
  postId:'#P454549',
  requirement:"User Requirements go here, we don't care whatt",
  category:"Web Development",
  subCategory:"MERN",
  maxDurationDays:7,
  postedOn:new Date().toLocaleDateString(),
  status:'draft',
  totalPrice:65,
  lastSeenByDNA:'1 month ago',
  files:[
    {
      title:"ABC.pdf",
      sizeKBS:24
    }
  ],
}