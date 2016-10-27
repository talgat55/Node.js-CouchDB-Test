var nano = require('nano')('http://localhost:5984');
nano.db.create('books');
var books = nano.db.use('books');

var data = { 
    name: 'pikachu', 
    skills: ['thunder bolt', 'iron tail', 'quick attack', 'mega punch'], 
    type: 'electric' 
};

// books.insert(data, 'unique_id', function(err, body){  // custom id "unique_id"
books.insert(data, null, function(err, body){
  if(!err){
    //awesome
  }
});
//Get a list of all books
books.list(function(err, body){
  console.log(body.rows);
});


