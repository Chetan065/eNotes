require("dotenv").config();
const mongoose = require('mongoose')
connectToMongo().catch(err => console.log(err));


async function connectToMongo() {
  let DATA = process.env.DATABASE;
  await mongoose.connect(DATA);
}
module.exports = connectToMongo