import { MongoClient } from "mongodb";

async function insertMessage(jsonDocument) {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const message = db.collection("message");

  await message.insertOne(jsonDocument);

  await client.close();
  console.log("Record Added");
}

async function readMessage() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);

  // logic of read
  let db = client.db("mydb");
  let message = db.collection("message");

  let list = await message.find().toArray();
  console.log(list);

  await client.close();
}

async function main() {
  let jsonDocument = {
    message: "Hello and Welcome to CDAC",
    to: "santosh",
    from: "tejas",
  };
  // await insertMessage(jsonDocument);
  readMessage();
}

main();
