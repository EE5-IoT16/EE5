const {MongoClient} = require('mongodb');

async function main(){
    /**
    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     */
    const uri = "mongodb+srv://SamuelTocci:BAKDpGf5aXCuTjqQ@ee5.5nq6q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri)

    
}