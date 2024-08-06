# Project : VCET HACKATHON 2024 🗿

# Theme : Code The Cosmos 🚀

## Getting Started

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.18.0 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Follow the Steps**

   ```sh
   git clone https://github.com/MeetDOD/Hackathon_2024.git
   cd codeTheCosmos
   npm i
   npm run dev

### Screenshot:

![image](https://github.com/user-attachments/assets/08417713-60e8-4a99-830f-24586dfa2a0d)



### Install dependencies and start the backend server

   ```sh
      cd backend
      npm install express mongoose nodemailer cors dotenv prettier
      node server.js

### Install dependencies and start the Frotend

   ```sh
      cd ../dashboard
      npm install
      npm install -D tailwindcss
      npx tailwindcss init
      npm install react-icons
      npm start

### Project Structure

   ## Backend
   arduino
   backend/
   ├── controllers/
   ├── models/
   ├── routes/
   ├── middlewares/
   ├── config/
   ├── server.js
   └── .env

## controllers/: Contains the logic for handling requests, processing data, and returning responses.
## models/: Defines the schema for the database and interacts with the database using Mongoose.
## routes/: Contains the route definitions and associates routes with their corresponding controllers.
## middlewares/: Contains custom middleware functions for request processing.
## config/: Contains configuration files and settings such as database connections.
## server.js: The entry point of the backend application.
## .env: Environment variables for configuration settings. 
## prettier : formate code  



## Dashboard

   dashboard/
   arduino
   ├── components/
   ├── services/
   ├── utils/
   ├── pages/
   ├── index.js
   └── tailwind.config.js


## components/: Reusable React components.
## services/: Contains functions for making API calls and interacting with the backend.
## utils/: Utility functions and helpers.
## pages/: React components representing different pages of the application.
## index.js: The entry point of the React application.
## tailwind.config.js: Configuration file for Tailwind CSS.