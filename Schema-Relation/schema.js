/*
        *** Schema of MongoDB ***
        => MongoDB enforeces no schemas! Documents do not have to use the same schema inside of one collection.
        => But that does not mean that you can not use some kind of schema!
*/

/*
                                                               *** Dat Types ***
    * Text -> "A",
    * Boolean -> True/false
                                                       Number 
    Integer (int32) (55) --- NumberLong(int64)(100000000000000000) --- NumberDecimal(12.99)
    * ObjectId -> auto generate mongodb, it is unique id  -> ObjectId("afsfh")
    * ISODate -> ISODate("2022-06-20") -> new Date()
    * Timestamp -> new Timestamp(425625)
    * Embedded Document -> {"a": {...}}
    * Array -> {"b": [...]}
*/
/*
    ******* Data Schemas & Data Modelling *******
    * Which data does my app need or generate?
        => Defines the fields you will need (and how they relate ?)
        => example(User information, product information, Orders,...)

    * Where do i need my Data? 
        => Defines your required collection + field grouping
        => Welcome page, products, list page, orders page
    
    * Which kind of Data or information do i want to display?
        => Defines which queries you will need
        => Welcome page, products, list page, orders page
    
    * How often do i fetach my data?
        => Defines whether you should optimize for easy fetching
        =>For every page reload
    
    * How often do i write or change my data?
        => Defines whether you should optimize for easy fetching
        => Orders => often
        => Product Data => Rarely
*/

/*
    *** Relation - Options ***
        => Nested / Embedded Documents
        ... is better for...
        1.Small subdocuments
        2.Data that does not change regularly
        3.When eventual consistency is acceptable
        4.Documents that grow by a small amount
        5.Data that you’ll often need to perform a second query to fetch Fast reads
        6.Group data together logically
        7.Great for data that belongs together and is not really overlaping with other data
        8.Avoid super-deep nesting (100+ levels) or exremly longs (16 mb size limit per document)

        {
            name: "A",
            age: 30,
            address: {
                street: "Second",
                city: Kayseri
            }
        }
        => Reference
         References are better for...
            1.Large subdocuments
            2.Volatile data
            3.When immediate consistency is necessary
            4.Documents that grow a large amount
            5.Data that you’ll often exclude from the results
            6.Fast writes
            7.Split data across collections
            8.great for related but shared data as well as for data which used in relations and standalone
            9. Allows you to overcome nesting and size limits (by creating new document)
        {
            name: "A",
            age: 30,
            address:{
                _referenceID,
                ....
            }
        }


*/
/*
        *** One to One Relation ***
         => 1 to 1 relations are relations where each item corresponds to exactly one other item. e.g.:
       One patient has one disease summary, a diseases summary belong to the one patient.
       One person has one car, a car belongs to one person
       ...embedded way...
       {
           name: "a",
           age:30,
           car: {
               model: "342",
               name: "BMW"
           }
       }
       ... reference way ...
       {
           name: "a",
           age:30,
           car: put CarCollectionReference
       }
                
*/
/*
        *** One to many ***
        => 1 to Many relations are a relation where one items corresponding with many other items, example
            One question  has many answers, one answer belongs to one question.
*/

// reference way
// {
//         "_id" : ObjectId("62a47b6f7a38168309efdeef"),
//         "name" : "A",
//         "question" : "How it's Work?",
//         "answers" : [
//                 "aid",
//                 "bid"
//         ]
// }

// { "_id" : "aid", "text" : "It's work like that!" }
// { "_id" : "bid", "text" : "It's working what ever you want" }

// *** embedded way ***
//{
//         "_id" : ObjectId("62a47b6f7a38168309efdeef"),
//         "name" : "A",
//        "question" : "How it's Work?",
//         "answers" : [
//                 {
//                     _id: "aid",
//                     text: "It's work like that!"
//                 },
//                 {
//                     _id: "bid",
//                     text: "It's working what ever you want"
//                 }
//         ]
// }
/*
        *** Many to many ***
        => May to Many relations are a relation where many items corresponding with many other items, example
            One customers has many products (via orders), a product belongs to many customers
*/

// reference way
//{
    //         "_id" : ObjectId("62a47b6f7a38168309efdeef"),
    //         "name" : "A",
    //        "age" : 29,
    //         "orders" : [
    //                 {
    //                    "reference id from oreders"
    //                 },
    //         ]
    // }

// *** embedded way *** 
// not recommended
//{
//         "_id" : ObjectId("62a47b6f7a38168309efdeef"),
//         "name" : "A",
//        "age" : 29,
//         "orders" : [
//                 {
//                     title: "A Book",
//                     price: 12.99,
//                      quantity: 2
//                 },
//         ]
// }

/*
       *** Joining With $lookup ***
        => $lookup is helpful aggreate tool, which allow to fetch to related document and merge together one document with one step.
*/