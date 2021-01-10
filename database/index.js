const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true})
.then(() => console.log("Connected"))
.catch(err => console.log(err));

let repoSchema = new mongoose.Schema({
  name: String,
  owner: String,
  html_url: {type: String, unique: true},
  updated_at: Date,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// let db = mongoose.connection;

let parseRepos = (data) => {
  let parsed = [];
  for (item of data) {
    let repo = {
      name: item.name,
      owner: item.owner.login,
      html_url: item.html_url,
      updated_at: item.updated_at,
      watchers: item.watchers
    };
    parsed.push(repo);
  }
  return parsed;
};

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // iterate through data array
  // for each item in array
    // create new document from model containing input
    // save document to db
  Repo.insertMany(data).then((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Docs written successfully.');
    }
  });
};

let get25 = (callback) => {
  Repo.find({}, null, {sort: { watchers : -1 }}, ((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  }));
};

module.exports.save = save;
module.exports.parseRepos = parseRepos;
module.exports.get25 = get25;
