this is the solution of the assignment 
we have created a REST API for an ecommerce market place 
we have tried to perfectly complete it 
any one can run this project on thier system after installing all the required packages using command 

"npm install" this command will install all the required packages 
now we have to create a .env file in the project folder oly and have to add some information
such as 
PORT = 9000
MONGO_URL = "your mongoDB connection string"

after successfully creating the .env file and adding the required data you can run this project on your system
and here are the list of all endpoints which you can use for the ecommerce website

1) Auth API's

a) POST /api/auth/register

{
    "username":"ayush",
    "password": "12345678",
    "userType": "buyer"
}


this is used to register a new user which accepts username,password, userType(buyer/seller)

b) POST /api/auth/login

{
    "username":"ayush",
    "password": "12345678"
}
this is used to login a user who is already registered using username,password

2) API's for buyers

a) GET /api/buyer/list-of-sellers
here using this a buyer can get the list of all the sellers 

b) GET /api/buyer/seller-catalog/:seller_id
here a buyer can see the catalog of a particular seller using his id 

c) POST /api/buyer/create-order/:seller_id
using this a buyer can place order after providing seller id and list of the items


{
    "id": "65774672c496aedc8ab18950",
    "items" :[{
        "productName":"Samsung X",
        "price": 9999
    },
    {
        "productName":"iPhone XI",
        "price": 9900
    }]
}

3) API's for seller 

a) POST /api/seller/create-catalog
this is used by seller to create the catalog of thier products which takes sellerId and list of thier products

{
    "sellerId": "6577465cc496aedc8ab1894e",
    "items" :[{
        "productName":"iPh",
        "price": 9999
    },
    {
        "productName":"iPhone ",
        "price": 9900
    }]
    
}

b) GET /api/seller/orders 
this is used by seller to get the list of all the orders

 


