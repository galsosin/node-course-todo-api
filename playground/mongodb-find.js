const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectId('597ddb1de5ac6f2c6f5fc402');
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })


//  db.close();
});
