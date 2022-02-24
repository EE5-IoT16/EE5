const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://SamuelTocci:BAKDpGf5aXCuTjqQ@ee5.5nq6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

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
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

async function insertOne(){
  
}

// db.inventory.insertOne(
//   { "item" : "canvas",
//     "qty" : 100,
//     "tags" : ["cotton"],
//     "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" }
//   }
// )


main();