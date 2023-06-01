const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const allChefs = require("./data.json")

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get('/allData', (req,res)=> {
  res.send(allChefs);
})

app.listen(5000, ()=> {
  console.log('server is running on port 5000')
})


