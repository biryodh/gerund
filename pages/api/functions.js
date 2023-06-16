

export default async function func (req, res) {
    const client = await clientPromise;
    const db = client.db("nextjs-mongodb-demo");
    switch (req.method) {
        case "POST":
          let bodyObject = (req.body);
          let myPost = await db.collection("posts").insertOne(bodyObject);
          res.json(myPost);
          break;
        case "GET":
          const allPosts = await db.collection("posts").find({}).toArray();
          res.json({ status: 200, data: allPosts });
          break;
        case "PUT":
            const post = await db.collection("posts").find({}).toArray();
            res.json({ status: 200, data: allPosts });
            break;
      }
}