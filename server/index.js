const express = require('express');
let app = express();
const { getReposByUsername } = require('../helpers/github.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let username = req.body.username;
  console.log(username);
  getReposByUsername(username, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // save to db
      res.status(200).send(data);
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

