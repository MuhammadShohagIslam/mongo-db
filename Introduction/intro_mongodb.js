/*
                                             === MongoDB ===
                    *** Databases, Collections, Documents ***
         => MongoDB is a database, which holds multiple 'Collections' where each 'Collection' can hold multiple 'Documents'

         => Database and Collection are created 'lazily' (means when a document is inserted)

         => A Document can not directly be inserted into database, it's always part of the collection , you need to use a collection!

                  *** Document Structure ***
        => Each document needs a unique ID, which has to called _id(and gets one by default), or you can set this on your own or take the mongodb creates for you

        => You may have embedded documents and array fields, its core features of the mongodb (means its nested doucment all one overarching document in one collection, we can have to 'up to 100 levels of nesting', the overall documents size has to be below 60 megabytes)

        => Array of embedded documets which hold any of data, it can be object or string what ever we want to store. It's simply means lists of data in a document)

                    *** CRUD Operations ***
        => CRUD(Create , Read, Update, Delete)
        => MongoDB offers multiple CRUD operations for single-document and and bulk options ( insertOne(), insertMany())
        => Some methods require an argument (insertOne(), others do not (find()))
        => find() returns a cursor, Not a list of documents!(Cursor gives you some documets, not all list of doucments, we can find curse with find() method)
        => Use filters to find specific documents

                    *** Retrieving Data ***
        => Use filters and operators ($gt) to limit the number of documents you retrive
        => Use 'projection' to limit the set of fields you retrieve( tells mongodb which fileds actully want to get and which fields  you do not want to get)
        => 'filters allow you to restric the amount of documents', 'projections allow to restrict the amount of fields per document'
*/

/* 
              *** CRUD Operations *** 
        *Create
            => insertOne(data, options) -> allow to insert one data of document into a collection
            => insertMany(data, options) -> insert more than one document into a collection
        *Read
            => find(filter, options) -> allow to get all data or data of filter way, if we pass {} into the filter place , we can get all of documetns
    
*/
/*
    // if we want to insert one document 
db.flightData.insertOne({ 
        "departureAirport": "LHR",
...     "arrivalAirport": "TXL",  
...     "aircraft": "Airbus A320",
...     "distance": 950,
...     "intercontinental": false
})

result: {
        "acknowledged" : true,
        "insertedId" : ObjectId("62a328936fca71304264f70c")
}
it show us, just insertedId, which is the unique id of the collection.
*/
/*
    // if we want to insert more than one  document 
db.flightData.insertMany([      
...   {
...     "departureAirport": "MUC",
...     "arrivalAirport": "SFO",  
...     "aircraft": "Airbus A380",
...     "distance": 12000,
...     "intercontinental": true
...   },
...   {
...     "departureAirport": "LHR",
...     "arrivalAirport": "TXL",
...     "aircraft": "Airbus A320",
...     "distance": 950,
...     "intercontinental": false
...   }
... ])

result: {
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62a32a0b6fca71304264f70d"),
                ObjectId("62a32a0b6fca71304264f70e")
        ]
}
it show us, just two insertedId, beacuse we inserted two document into the a docuemtns which are the unique id of the collection.
*/

/*
        *** update() vs updateMany() ***
        => when you use update(), we can do not use mongodb reserved symbol like $set, but updateMany(), we have to be use
        => all matching elements update() and updateMany()
        => update does accept syntax with an object then take this object and basically replace the existing object with the new object with in new document. updateOne() and updateMany() is basically  patch the existing object instead of replace
        *Note: if we want to replace data, we can use replaceOne(), it's safer way to replace data and if we want to change pertially data we can use updateOne() or updateMany() method.

*/

/*
    *** Cursor Object ***
    => Cursor is a object which has lots of metadata behind it that allow us to cycle through the result
    => if we use ''collection.find({})toArray()''', its exhaust the cursor object, it gives all the data with array.
    => we can use '''collection.find({}).forEach((data) => {printjson(data)})''' method, fetaching all the data from database collection.
*/

/*
    *** Projection ***
    => Projection is a one kind of technique, through which we can get data specific property. through projection we can avoid unneccessary data from database collection, and if we do not imapct brandwith

    //  db.passengers.find({}, {name:1, _id:0}).toArray()
        --- name: 1 -> it's gives use just only name property , and avoid  all kind property
        --- _id: 0 -> if we want to avoid _id property in the documents
*/

/*
    *** Embedded Document ***
        => Embedded document is a nested document like nested object , we can nested document up to 100 levels
            and max 16mb docuemnt we can nested more than one document like
        document {
            human: {
                man:{
                    bodyStructure:{

                    }
                },
                women:{
                    bodyStructure:{
                        
                    }
                }
            }
        }
    => Array of embedded doccument: it can hold array into the document.
     document {
          projects: [
            project: {
                title,
                price
            },
            totalAmount
          ]
        }

        => accessing nested object data
            collection.findOne({"property.property.property": "value"})
            collection.find({"property.property.property": "value"})
        => accessing nested array data
            collection.find().arrayProperty

*/
