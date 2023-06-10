import { MongoClient } from "mongodb";

async function main() {
  // due to await present insite we added async keyword

  const uri = "mongodb://0.0.0.0:27017"; //connect with server
  const client = new MongoClient(uri); //connect with db

  const db = client.db("mydb"); //connect with client
  const message = db.collection("message"); //connect with collection message

  await message.insertOne({}); //add data in collection message
  // insert is async method also return type is promise so added await

  //close the connection otherwise it will never stop
  await client.close(); // return type is promise to add await
  console.log("Record Added");
}

main();
