const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://SamuelTocci:BAKDpGf5aXCuTjqQ@ee5.5nq6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

testDoc = {type : "heartrate", bpm : 86}

async function main(){
    /**
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     */
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");


        const database = client.db('myFirstDatabase');
        const movies = database.collection('heartrate');

        const res = movies.insertOne(testDoc);

        const query = { type: 'heartrate' };
        const movie = await movies.findOne(query);
        console.log(movie);

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}


async function insertOneDoc(){
  const res = await collection.insertOne(testDoc);
  console.log(res)
  return res
}

// db.inventory.insertOne(
//   { "item" : "canvas",
//     "qty" : 100,
//     "tags" : ["cotton"],
//     "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" }
//   }
// )


main();