const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3500
const app = express();
require('dotenv').config();

app.use(cors({
  origin: [
    // change the URLs to the correct one

    '', 
    'http://localhost:3000',
    ' http://172.24.16.1:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.get('/',(req,res)=>{
  res.json({message:"Welcome to Node API 👍👍"})
})


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',require('./Routes/SendEmail'))


app.listen(port, () => console.log(`Server running on port ${port}`));
