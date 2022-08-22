// index.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// timeStamp

app.get("/api", function (req, res) {

  const newDate = new Date()
  
  if (newDate.toString() === "Invalid Date") {
    res.json({ error : "Invalid Date" }).end()
  }

  res.json({"unix": Date.parse(newDate), "utc": newDate.toUTCString()})
})

app.get("/api/:date", function (req, res) {
  const {date} = req.params
  
  console.log(date)

  const parsedDate = date - 0 ? date - 0 : date
  const newDate = new Date(parsedDate)
  
  if (newDate.toString() === "Invalid Date") {
    res.json({ error : "Invalid Date" }).end()
  }

  res.json({"unix": Date.parse(newDate), "utc": newDate.toUTCString()})
})

// listen for requests :)

const port = process.env.PORT || 3000

app.listen(port , function () {
  console.log('Your app is listening on port ' + port);
});
