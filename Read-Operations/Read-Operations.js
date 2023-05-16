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
/*
"Unleashing the Power of Querying : Discover MongoDB's $not and $nor Operators"

মঙ্গোডিবি হলো বর্তমান সময়ের একটি লিডিং NoSQL ডেটাবেস যা আমাদের কে খুব সহজেই পরিবর্তনশীল এবং শক্তিশালী কুয়েরি করার সুবিধা দিয়ে থাকে। ডেটাবেজ ম্যানেজ করা বেশ জটিল একটি কাজ হলেও, মঙ্গোডিবি আপনাকে বেশ কিছু সুবিধাজনক অপারেটর দিয়ে থাকে যা দিয়ে আপনি খুব সহজেই আপনার ডেটার মধ্যে কুয়েরি চালাতে পারবেন। এ ধরনের অপারেটরের মধ্যে রয়েছে $not এবং $nor অপারেটর, যা আপনাকে যথাক্রমে কুয়েরির কন্ডিশনগুলোকে falsy করে দিতে পারে এবং লজিকাল NOR অপারেশন চালাতে সাহায্য করে। এই ব্লগে আমরা জানবো কিভাবে এই দুটি অপারেটর মঙ্গোডিবির কুয়েরি মেকানিজম কে আরও বেটার ভাবে অপারেট করতে সাহায্য করে।
Understanding $not Operator:
$not অপারেটরটি মঙ্গোডিবিতে একটি স্পেসিফিক শর্তকে falsy বা বিপরীত শর্তে পাল্টে দেওয়ার জন্য ব্যবহৃত হয়। এটি প্রায়শই অন্য কুয়েরি অপারেটরগুলির সঙ্গে সংযোগ করে ব্যবহৃত হয় যাতে নির্দিষ্ট শর্তটির উল্টো অর্থাৎ falsy বা বিপরীত শর্তটি পাওয়া যায়। $not অপারেটরটি একটি সিঙ্গেল কুয়েরি কন্ডিশন রিসিভ করে এবং সেই কন্ডিশনটিকে যে ডেটা গুলো পূরণ করতে পারেনা, সেই ডেটা গুলো কে ফলাফল হিসেবে দেয়।
Syntax:
$not অপারেটরটি নিচের সিনট্যাক্সে ব্যবহার করা যায়:
{ field: { $not: { <query condition>} } }
Example:
ধরা যাক, আমাদের ডেটাবেজে একটি বইয়ের কালেকশন আছে এবং আমরা সেখান থেকে সবগুলি বই খুঁজতে চাই যা J.K. Rowling দ্বারা লেখা নয়। আমরা $not অপারেটর ব্যবহার করে এটি সম্ভব করতে পারি নিচের মত করে:
db.books.find({ author: { $not: { $eq: "J.K. Rowling" } } })
এই কুয়েরি সমস্ত বইগুলি রিটার্ন করবে যা লেকখ "J.K. Rowling" এর লেখা নয়।
Understanding $nor operator:
$not Operator আপনাকে একটি সিঙ্গেল কন্ডিশনের উপর ডেটাবেজে অপারেশন চালাতে দেয়। কিন্তু $nor অপারেটর আপনাকে একাধিক কন্ডিশনের একটি Array দিয়ে ডেটাবেজে অপারেশন চালানোর সুবিধা দেয়। অর্থাৎ একাধিক কন্ডিশনের একটি Array তে থাকা কন্ডিশনগুলো কে falsy বা বিপরীত শর্তে পাল্টে দেয় এবং যে ডকুমেন্ট গুলো এই কন্ডিশন ম্যাচ করবেনা সেগুলো কে ফলাফল হিসেবে দেখাবে।
Syntax:
$nor অপারেটরটি নিচের সিনট্যাক্সে ব্যবহার করা যায়:
{ $nor: [ { <query condition 1> }, { <query condition 2> }, ... ] }
Example:
চলুন মনে করি আমাদের একটি পণ্যের কালেকশন আছে এবং আমরা যেসব পণ্যগুলি "ইলেকট্রনিক্স" ক্যাটেগরির অন্তর্ভুক্ত নয় এবং যাদের মূল্য $500 এর বেশি নয় সেগুলোকে কুয়েরি চালিয়ে বের করতে চাই। আমরা $nor অপারেটর ব্যবহার করে এই কাজটি করতে পারি
db.products.find({
$nor: [
{ category: "electronics" },
{ price: { $gt: 500 } }
]
})
এই কুয়েরি সমস্ত পণ্যগুলি ফলাফল হিসাবে প্রদর্শন করবে যা electronics ক্যাটেগরির অন্তর্ভুক্ত নয় এবং তাদের মূল্য $500 এর বেশি নয়।
উপরে উল্লেখিত উদাহরণগুলি মঙ্গোডিবির $not এবং $nor অপারেটরগুলি ব্যবহার করে খুব সহজেই কুয়েরি চালানোর সুবিধা দেয়। এই অপারেটরগুলি আপনার দেওয়া শর্তগুলি falsy করার সুবিধা দেয় এবং লজিকাল অপারেশন পালন করার জন্য মঙ্গোডিবির কোয়েরি সিস্টেম কে আর বেটার করে তোলে। আপনি এই অপারেটরগুলি ব্যবহার করে আপনার প্রয়োজনে সহজেই পরিবর্তনশীল কুয়েরি তৈরি করতে পারেন ।

*/
