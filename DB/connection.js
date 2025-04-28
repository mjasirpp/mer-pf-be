// const mongoose = require('mongoose')
// const connectionString = process.env.DATABASE
// mongoose.connect(connectionString).then(()=>{
//     console.log("Mongodb Atlas successfully connected with pfServer");
// }).catch((err)=>{
//     console.log(`Mongodb connection failed!!! Error: ${err}`);
// })

const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to load environment variables

const connectionString = process.env.DATABASE;

if (!connectionString) {
    console.log("Error: DATABASE connection string is missing in .env file.");
    process.exit(1); // Stop if there's no DATABASE connection string
}

mongoose.connect(connectionString).then(() => {
    console.log('MongoDB Atlas connected with Server');
}).catch((err) => {
    console.log(`Connection Failed: ${err.message}`);
});