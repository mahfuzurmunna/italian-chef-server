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

app.get("/allData/:id", (req, res) => {
  const id = req.params.id;
  const item = allChefs[0]?.chefs.find(pd => pd.id== id)
  console.log(item);
  res.send({item})
});

app.listen(5000, ()=> {
  console.log('server is running on port 5000')
})


