const express = require('express')
const mongoose = require('mongoose')
// const bodyPaser = require('body-parser')
const app = express()
const port = 5000
const password = 'Bm9eK1L1xqZqw9Db'

// Connect to MongoDB (replace 'your-database-uri' with your MongoDB connection string)
mongoose.connect(`mongodb+srv://pugarosabal:${password}@cluster0.3fn3imr.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB', error);
  });

//   app.use(bodyPaser.json())



  // Define a simple route to test the connection
app.get('/', (req, res) => {
    res.send('MongoDB Connection Test Successful!');
  });
  
  // Start the server
  app.listen(5000, () => {
    console.log(`Server is running on ${port}`);
  });


 
