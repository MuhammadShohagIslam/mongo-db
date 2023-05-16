/*
    *** Importing Data from JSON data through with MongoImport ***
        Syntax: mongoimport jsonDataName.json -d databaseName -c collectionName --jsonArray --drop
            * jsonDataName: is the name of the json file where you have to use this data in the mongodb 
            * databaseName: name of the database which is the name of the database in mongodb
            * collectionName: is the name of the collection which represented collection name.
            * drop: if the data is the available in the mongodb, which deleted immeditely, and created new one
*/
// mongoimport users.json -d userData -c users --jsonArray --drop