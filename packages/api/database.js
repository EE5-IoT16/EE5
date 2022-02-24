const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://SamuelTocci:BAKDpGf5aXCuTjqQ@ee5.5nq6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

testDoc = {type : "heartrate", bpm : 90}

async function insertOneDb(doc){
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
        const hrCollection = database.collection('heartrate');

        //const res = hrCollection.insertOne(doc);

        const findResult = await hrCollection.find({type: "heartrate"})
        await findResult.forEach(console.dir)

        // const query = { type: 'heartrate' };
        // const movie = await hrCollection.findOne(query);
        // console.log(movie);

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

insertOneDb(testDoc);