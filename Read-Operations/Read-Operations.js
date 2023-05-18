/*
    *** Read CRUD Operations ***
    => through which Read CRUD Operations, we can retrive documents from a collection.

            *** Methods, Filters & Operations ***

                                                                                                                  Field:   Value
                    db                        .myCollection                                 .find( {age :    32}    )
    Access current database      Access this  collection               Apply  Equality / Single Value Filter

                                                                                                    Field:   Operator  Value
                    db                        .myCollection                   .find( {age : {  $gt :         30 }}    )
    Access current database      Access this  collection                             Range Filter

*/
/*
    *** Read Operators ***
    => Query Selectors 
    => Projection Operators 

                                            ``` How Operators Imapct our Data ```
        Type                                 Purpose                                  Change  Data                          Example
    Query Operator          Locate Data                        does not change our data                      $eg
    Projection Operator   Modify Data Presentation  does not change our data                       $
    Update Operators       Modify + add additional    change existing data                              $inc
                                                    Data
*/

/*
        *** Query Selectors ***
            => Comparison
            => Logical
            => Element
            => Evaluation
            => Array
            => Comments
            => Geospatial

        *** Projection Operators ***
            => $
            => $elemMatch
            => $meta
            => $slice
*/
/*
    => findOne() --> if we want to retrive just first matching data from database collection, we can use findOne() method
    => findMany() --> if we want to retrive all matching data from database collection, we can use findMany() method

    findOne({age: 30}) -> {age: 30}: checking equality filter
 */

/*
                            *** Comparison Operators ***
                                                $eq
        find({age: {$eq: 30}}) --> gives you data which are equal to a specified value
        shortcut: find({age: 30})
                                                $ne
        find({age: {$ne: 30}}) --> gives you data which are not equal to a specified value
                                                $gt
        find({age: {$gt: 30}}) --> gives you data which are greater than a specified value.
                                                $gte
        find({age: {$gte: 30}}) --> gives you data which are greater than or equal to a specified value.
                                                $lt
        find({age: {$lt: 30}}) --> gives you data which are less than a specified value.
                                                $lte
        find({age: {$lte: 30}}) --> gives you data which are less than or equal to a specified value.
                                                *** $in ***
        => we can get values through with range way
            find({age: {$in: [30, 40]}}) -> gives data which is between 30 to 40

        find({hobbiesArray: {$in: ["sports"]}}) --> gives you data which any of the values specified array
            *"sports" is diffrence "Sports", beacuse it's case sentative

                                        *** $nin ***
         find({age: {$nin: [30, 40]}}) -> gives data which is not between 30 to 40

        find({hobbiesArray: {$nin: ["sports"]}}) --> gives you data which any of the values specified array

                            *** Embededed Document Query ***

        find({"favFruits.title": "apple"}) -> use dot(.) notation to specifie path, we can use many dot(.)

                            *** Array of Embedded Document ***

            find({hobbiesArray:["sports"]}) --> gives you data which just value specified array, which is 'exact equality'

            find({hobbiesArray:"sports"}) --> gives you data which just value specified array, which is 'not exact equality'

*/
/*
                           *** Logical Operators ***
                                        $and
            => $and is the by default in logical operators in read operation
                 find({"favFruits.title": "Apple"}, {age: 30})

            => if filtering both fileds is same, in this case, we have to use one fields, beacuse in json, you can not have same key more than once, if use more than one same fields, second one overwrite first one, but if we use $and operators, it is solved the problem

            find({"favFruits.title": "Apple"}, {"favFruits.title": "Banana"})

            find({$and: [{"favFruits.title": "Apple"}, {age: 30}]}) -> if condition is the match both, return this document
            
            find({$and: [{"favFruits.title": "Apple"}, {age: {$gt: 20}}]}) -> if condition is the match both, return this document

                                        $not
            find({age:{$not:{$eq: 30}}) -> returns documents that do not match the query expression.

            find({age: {$ne: 30}}) -> eturns documents that do not match the query expression.
*/
/*
    *** Element Operators ***
                          $exists
        => it's return this kind of doucment if filed is exist, which one we specified.
        find({age: {$exists: true}})
        find({age: {$exists: true, $ne: null}}) -> without null value document returns
        find({age: {$exists: true, $gt: 13}}) 

                        $type
        find({age: {$type: "number"}}) -> return all document where age type is number.
*/

/*
                ***  Evaluation Operations ***
                            *** $rejex ***
                $rejex means : way of searching text certain patterns.
        find({description: {$regex: /mobile/}}) -> return this kind of document if mobile text avaiable in the description fields.
                            *** $expr ***
        => $expr is useful if you want to compare two fields inside one document and then find all documents where this comaprison returns a certain result.
            find({$expr: {$gt: ["$volume", "$target"]}}) -> return this kind of document where volume greater than target.

            find({$expr: {$gte: [{$cond: {if: {$gte: ["$volume", 190]}, then:{$subtract: ["$volume", 10]}, else: "$volume"}}, "$target"]}}) -> return if vloume 180 greater than target value, this kind of document.
*/

/*
                *** Array Operations ***
                            *** $size ***
                find({hobbies: {$size: 3}}) -> it return this kind of document where hobbies array has 3 value; {$size: eact number not $gte, $le ...}

                            *** $all ***
                find({hobbies: {$all: ["Sports", "hiking", "Cooking"]}})-> it return this kind of document where hobbies array has Sports, hiking, Cooking value; if we use $all, order is not matter to find data
                            *** $elemMatch ***
                find{favFruits: {$elemMatch: {title: "banana", quantity: {$gt: 3}}}} -> return this kind of document where exact match this kind of field in the array.
                

*/

