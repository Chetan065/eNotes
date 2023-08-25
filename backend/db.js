const mongoose = require('mongoose')
connectToMongo().catch(err => console.log(err));

async function connectToMongo() {
  await mongoose.connect('mongodb://localhost:27017');
  console.log("connected sucessfully")
}
module.exports = connectToMongo;