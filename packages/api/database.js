const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://SamuelTocci:BAKDpGf5aXCuTjqQ@ee5.5nq6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri)

async function insertOne(doc){
    /**
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     */
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });


        const database = client.db('myFirstDatabase');
        const hrCollection = database.collection('heartrate');

        const res = await hrCollection.insertOne(doc);

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

async function findAll(findQuery){
  try {
    // Connect the client to the server
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const database = client.db('myFirstDatabase');
    const hrCollection = database.collection('heartrate');


    const findResult = await hrCollection.find(findQuery);
    await findResult.forEach(console.dir);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function update(filterDoc, newDoc){
  try {
    // Connect the client to the server
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    const database = client.db('myFirstDatabase');
    const hrCollection = database.collection('heartrate');

    await hrCollection.updateOne(filterDoc, newDoc);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = {
  findAll: findAll,
  insertOne: insertOne,
  update: update,
}