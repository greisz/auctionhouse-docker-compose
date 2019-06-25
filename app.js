'use strict';

const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
let connection = mysql.createConnection({
  host: 'maria:4000',
  user: 'root',
  password: 'example',
  database: 'auction',
  multipleStatements: false,
})
app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) =>{
  res.sendFile('./public/index.html')
});

app.get('/api/items', (req, res) => {
  connection.query("select * from itemdetails;", (err, post) => {
    if (err) {
      res.status(500).send('');
      return
    } else {
      res.status(200);
      res.json(post)
      return
    }
  })
})

app.post('/api/items/:id/bids', (req, res) => {
  const { id } = req.params;
  const amount = req.body.amount;
  const name = req.body.name;
  let date = new Date;
  connection.query(`select * from itemdetails where item_ID = ${id};`, (err, rows) => {
    if (err) {
      res.status(500);
      res.json({ "message": "Something went wrong" });
      return
    } else if (rows[0] === undefined) {
      res.status(404);
      res.json({ "message": "The bid you requested does not exist" });
      return
    } else if (rows[0].highestBid > amount) {
      res.status(400);
      res.json({ "message": "Your bid is below the highest bid!" });
      return
    } else if (rows[0].expiryDate < date) {
      res.status(400);
      res.json({ "message": "The auction is over!" });
    } else {
      connection.query(`update itemdetails SET highestBid = ${amount}, highestBidderName = "${name}" where item_ID = ${id};`, (err, results) => {
        if (err) {
          res.status(500);
          res.json({ "message": "Something went wrong" });
        } else {
          res.status(200);
          res.json({ "message": "Successful!" });
        }
      })
    }
  })
})


app.listen(port, () => console.log(`The auction house is running on port ${port}!`));
