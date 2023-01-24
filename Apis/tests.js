const { request, response } = require("express");
const exp = require("express");
const test = exp.Router() ;
const expressAsyncHandler = require('express-async-handler') ;


const jwt = require('jsonwebtoken');
require('dotenv').config();

test.use(exp.json());


test.get("/getlists", expressAsyncHandler(async (request, response) => {
    let medicalListCollectionObject = request.app.get("medicalListCollectionObject");
    let usersDb = await medicalListCollectionObject.find().toArray();

    if (usersDb == null ) {
        response.send({ message : `the users collection is empty`})
    }
    else {
        response.send( {payload : usersDb}) ;
    }
}));


test.post("/create-list",
    expressAsyncHandler(async(request, response) => {
        let medicalListCollectionObject = request.app.get("medicalListCollectionObject");
        let newlist = request.body ;

        let newlistdb = await medicalListCollectionObject.findOne({_id : newlist._id, });
        if (newlistdb !== null ) {
            response.send({ message : `the testname already exists in the Db`});
        }
        else {
            await medicalListCollectionObject.insertOne(newlist) ;
            response.send({message:"The new test has been added succesfully"});
        }
}));



test.delete("/remove/:id" , expressAsyncHandler (async (request, response )=>{
    let medicalListCollectionObject = request.app.get("medicalListCollectionObject");
    let delListUser = request.params.id;
    await medicalListCollectionObject.deleteOne({ testGroup : delListUser}) ;
    response.send({message :`The user details succesfully deleted from DB `}) ; 
}))

test.put("/editlist/:name", expressAsyncHandler (async (request , response) => {
    let medicalListCollectionObject = request.app.get("medicalListCollectionObject");
    let modifiedObj = request.body ;    
    let Dbuser = await medicalListCollectionObject.findOne({ testGroup : modifiedObj.testGroup }) ;
    if ( Dbuser === null ){ 
        response.send( {message :"The user details doesnt exists..."}) ;
    }
    else {
        await medicalListCollectionObject.updateOne({testGroup : modifiedObj.testGroup},{$set: {...modifiedObj}}) ;
        response.send({message : "The user details updated succesfully"}) ;
    }
}))



module.exports = test ;