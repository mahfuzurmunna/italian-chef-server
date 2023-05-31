const express = require('express');
const app = express();


app.get("/", (req, res) => {
  res.json("hello world");
});

app.get('/allData', (req,res)=> {
  res.send({ result: 'okkk'});
})

app.listen(5000, ()=> {
  console.log('server is running on port 5000')
})


