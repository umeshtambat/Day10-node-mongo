import { MongoClient } from "mongodb";

async function insertRecord(jsonDocument) {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const message = db.collection("message");

  await message.insertOne(jsonDocument);

  await client.close();
  console.log("Record Added");
}

async function main() {
  let jsonDocument = {
    message: "Hello Universe",
    to: "santosh",
    from: "tejas",
  };
  await insertRecord(jsonDocument);
}

main();
