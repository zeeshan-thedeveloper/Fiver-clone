                            --------------------------------------
                           | Slice Description and required Data  |
                            --------------------------------------


allOrdersSlice:-> Returns an array of objects, each object representing an orders. Must have these properties

    [
        {
            orderId: 
            totalPrice:
            seller: CODEINDNA,
            service/project title: 
            dueOn:
            postedOn:
            status: newest or active or late or completed or delivered or cancelled
        }
    ]

And when clicked on any of these orders, goto view order page and bring all the details for that order using
viewOrderSlice
--------------------------------------------------------------------------------------------------------
balanceInfoSlice: Used in settings/balanaceSettings
                Must return a value from database containing users current balance
                Must return an array of objects each object representing purchased service for purchase history holding balanceInformation of user
                
    [
        {
            orderId:
            purchaseTitle: MERN website for business
            purchaseDate: August 12,2021
            costPaid: 142
        }
    ]

//use action creators to fetch data from store w r t to history option selected by use:
exp:
    Last 3 months
    fetchLast3Months:(state, action)=>{
        return result.slice(1,).filter(item=>item.month in range of last 3)
    }

--------------------------------------------------------------------------------------------------------
userProfileSlice:-> Must return object with details like
    {
        fullName:
        rating:
        profileImage:
        securityQuestion:
        responseTime:
        lastSeen:
        balance:
        contact:
        address: {

        }
        amountSpent:
        paymentMethod: verified or Not
        totalPurchases:50
        totalRatedPurchases:45
        
        linkedAccounts:[
            {
                accountName:"LinkedIn",
                icon:"Linked Icon",
            },
            {
                accountName:"Github",
                icon:"Github Icon",
                linkedOn:"10 August 2021",
            }
        ]
    }

--------------------------------------------------------------------------------------------------------

ordersSlice: must return array of objects, each object representing one order with these properties



    {
        completed:[
            {
                orderId:1212FA45D,
                price:214,
                status: completed
                dueOn:August 12, 2021
                deliveredOn: August 10, 2021
                thumbnail:
            },
        ]
}
    

--------------------------------------------------------------------------------------------------------
viewOrderSlice: must return an object corresponding to specific order by ID

        {
            orderId:1212FA45D,
            price:214,
            status: completed
            startDate:
            dueOn:August 12, 2021
            deliveredOn: August 10, 2021 || none
            description:requirements described by user
            projectOrServiceId:S787QJH445S,
            isProjectOrService:
            quantity: 12,
            package:"basic", "premium"
            packageOffers:["Application Audit", "Project Plan", "Cost Estimation" ....]
        },


this is required when we click on view order, and we know multiple things about cicked order, so we just need

//Later: We may also fetch chat if we place chat in database

--------------------------------------------------------------------------------------------------------
recentlyViewedServicesSlice: -> Must return array of 4 objects, each object representing service viewed by user

    [
        {
            serviceId:"454S45SWRDPDL1"
            serviceTitle:"You will get Custom Website",
            serviceThumbnail:image,
            serviceGallery: [image1, image2, image3],
            deliveryDays:2 days,
            ratings: 4,
            sells:2000,
            basicPrice:451
        },

        {
            serviceId:"454S45SWRDPDL1"
            serviceTitle:"You will get Custom Website",
            serviceThumbnail:image,
            serviceGallery: [image1, image2, image3],
            deliveryDays:2 days,
            ratings: 4,
            numberOfRatings:2000,
            basicPrice:451
        }
    ]

//When clicked on services, display the details of service in : ViewServiceDetails, fetch all required fields for that page
--------------------------------------------------------------------------------------------------------

recentlyViewedProjectsSlice:-> Must return array of 4 objects, each representing recent projects viewed 

    [
           {
            projectId:"454S45SWRDPDL1"
            projectTitle:"Whats app offline",
            projectThumbnail:image,
            deliveryDays:2 days,
            ratings: 4,
            price:451,
        }
]


--------------------------------------------------------------------------------------------------------
trendingServicesSlice:
Must return an array of objects, each object representing service

[
    {
        serviceImage:
        serviceId:
    }
]

When clicked, go to that service and fetch the required data on that page for that service which was clicked



