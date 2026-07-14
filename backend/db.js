const { MongoClient } = require('mongodb');
require('dotenv').config();

// Replace with your own connection string, or better, load it from .env
const url = process.env.MONGO_URL || "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/";
const dbName = "giftDB";

let dbInstance = null;

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  const client = new MongoClient(url);

  await client.connect();
  console.log("Successfully connected to MongoDB");

  dbInstance = client.db(dbName);
  return dbInstance;
}

module.exports = connectToDatabase;
