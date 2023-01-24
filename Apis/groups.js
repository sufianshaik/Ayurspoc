const { request, response } = require("express");
const exp = require("express");
const grp = exp.Router() ;
const expressAsyncHandler = require('express-async-handler') ;

const jwt = require('jsonwebtoken');
require('dotenv').config();

grp.use(exp.json());

grp.get("/getlists", expressAsyncHandler(async (request, response) => {
    let groupListCollectionObject = request.app.get("groupListCollectionObject");
    let usersDb = await groupListCollectionObject.find().toArray();

    if (usersDb == null ) {
        response.send({ message : `the users collection is empty`})
    }
    else {
        response.send( {payload : usersDb}) ;
    }
}));


grp.post("/create-list",
    expressAsyncHandler(async(request, response) => {
        let groupListCollectionObject = request.app.get("groupListCollectionObject");
        let newlist = request.body ;

        let newlistdb = await groupListCollectionObject.findOne({_id : newlist._id, });
        if (newlistdb !== null ) {
            response.send({ message : `the testname already exists in the Db`});
        }
        else {
            await groupListCollectionObject.insertOne(newlist) ;
            response.send({message:"The new test has been added succesfully"});
        }
}));

grp.delete("/remove/:id" , expressAsyncHandler (async (request, response )=>{
    let groupListCollectionObject = request.app.get("groupListCollectionObject");
    let delListUser = request.params.id;
    await groupListCollectionObject.deleteOne({ groupName : delListUser}) ;
    response.send({message :`The user details succesfully deleted from DB `}) ; 
}))

grp.put("/editlist/:name", expressAsyncHandler (async (request , response) => {
    let groupListCollectionObject = request.app.get("groupListCollectionObject");
    let modifiedObj = request.body ;    
    let Dbuser = await groupListCollectionObject.findOne({ groupName : modifiedObj.groupName }) ;
    if ( Dbuser === null ){ 
        response.send( {message :"The user details doesnt exists..."}) ;
    }
    else {
        await groupListCollectionObject.updateOne({ groupName : modifiedObj.groupName },{$set: {...modifiedObj}}) ;
        response.send({message : "The user details updated succesfully"}) ;
    }
}))





module.exports = grp ;