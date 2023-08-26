const mongoose = require('mongoose')
connectToMongo().catch(err => console.log(err));

async function connectToMongo() {
  await mongoose.connect('mongodb://127.0.0.1:27017/');
}
module.exports = connectToMongo