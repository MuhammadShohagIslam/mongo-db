/*
    *** Update CRUD Operations ***
        => Update operations is a one kind of CRUD Operations which modify existing documents in a collection or if do not find, it will add data in the collection.
        => Update operations target a single collection
        => All write operations in MongoDB are atomic on the level of a single document.

    *** updateOne({filter}, {$set:{what you want to update}}) ***
        => $set -> $set is the operator through which we can update multiple data not limited single data.it can be array, embedded document, embededed document outside of the array.

    *** $inc ***
        => updateOne({filter}, {$inc: {field(which field you increment): value(what we increment)}}) ->this kind of document which increments the value of the field by the specified amount.
        => updateOne({filter}, {$inc: {field(which field you increment): value(what we increment)}, $set: {}}) 
         * we can use other operator with $inc 
    
    *** $min ***
        => $min is the update operator, which only change the value if the new value is the lower than existing value.
            updateOne({filter}, {$min: {age: 29}}) 
    
    *** $max ***
        => $max which only change value if the new value is the higher than the existing value.
            updateOne({filter}, {$max: {age: 34}})
    
    *** $mul ***
        => $mul which multiplies the value of the field by the specified amount.
             updateOne({filter}, {$mul: {age: 2}})

    *** $unset ***
        => $unset, which remove of fields from matching document, which one you mantion
            updateOne/Many({filter}, {$unset: {age: ""}})

    *** $rename ***
        => this operator update the name of the field name 
          updateOne/Many({filter}, {$rename: {age: "updateName"}})  
    
    *** $upsert ***
        => $upsert operator, if your application in collection, if was not save at, it will be created a new doucment, if it was, you want to over write the doucment or existing document.
        or if the document does not exist, it will be created.
         updateOne/Many({filter}, {$set: {name:"", age: 30}}, {$upsert: true}) 
*/

/*
    *** Updating  In Array ***
*/
//  *** Updating Matched Array Element *** //
// $ : The positional $ operator identifies an element in an array to update without explicitly specifying the position of the element in the array.
