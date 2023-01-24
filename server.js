const exp = require('express');
const app = exp();
const mclient = require("mongodb").MongoClient;


require('dotenv').config()

const path = require('path')
app.use(exp.static(path.join(__dirname, './build')))

const Dburl = process.env.DATABASE_CONNECTION_URL;

mclient.connect(Dburl)
    .then((client) => {
      let dbobj = client.db("testdeploy");
      let medicalListCollectionObject = dbobj.collection("medicalList")
      let groupListCollectionObject = dbobj.collection("groupList")
      app.set("medicalListCollectionObject",medicalListCollectionObject);
      app.set("groupListCollectionObject",groupListCollectionObject);
      console.log("Db connection Succesful");
    })
    .catch( err => console.log("Error in connecting to DB", err));


const test = require('./Apis/tests');
const grp = require('./Apis/groups');

app.use('/list-api',test);
app.use('/group-list',grp);





app.use('/*', (request, response) => {
  response.sendFile(path.join(__dirname, './build/index.html'))
})

app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid ` })
})

app.use((error, request, response, next) => {
  response.send({ message: `Error occured at ${request.url}`, reason: `${error.message} in ${request.url}` })
})

const port = process.env.port
app.listen(port, () => console.log(`Web server listening on port ${port}...`));