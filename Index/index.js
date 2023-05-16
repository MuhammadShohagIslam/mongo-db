/*
    * if you have a query that will return a large portion or the majority of your documents, 
        an index can actually be slower because you then just have an extra step to go through 
        your almost entire index list and then you have to go to the collection and get all these documents,
        so you then just have an extra step because if you do a full collection scan, it can be faster
        and it certainly is if you return all elements but even for the majority it would be faster because
        with a full collection scan, you already have all the documents in memory and then an index doesn't offer you
        any more because that just is an extra step.

        Instead here we got all the documents in memory,
        we would have needed to go to the documents anyways to fetch them from the pointers the index gives us,
        so now we already have them and since we need most of them, this is now faster.
        So if you have queries that regularly return the majority or all of your documents, an index will not
        really help you there, it might even slow down the execution and that is important to keep in mind as a first restriction that you need to know when planning your queries.

        If you have a dataset where your queries typically only return fractions, like 10 or 20 percent or lower
        than that of the documents, then indexes will almost certainly always speed it up.

        If you've got a lot of queries that give you back all the documents or close to all the documents,
        quickly let you get to a narrow subset of your document list and not to the majority of that.

        Summarize:
            1. if we want to query large portion of data we can use normal query because it is cached of document
            or if we want to small portion of data, we can use index, otherwise query goes down slower
        Credit by Maximilian

        * boolean filed is not good for indexing

        * db.collection.createIndex({"dg.age", gender:1})
            => Now the order of these two fields here does matter because a compound index simply is an index with
            more than one field, like here we got two fields and this will essentially store one index where each entry in the index is now not on a single value but two combined values
            => So it does not create two indexes, that's important, it creates one index but one index where every element is a well, connected value. So now it will simply create pairs of ages and genders, so we'll have 30 male, 30 male, 30 female, 31 male, 31 female and so on
            => But the compound index can be used from "left to right" so to say, if we query with gender it is not work.
            => so if you had a compound index with three or four elements, you can have up to 31, then you could also
            just use the first two, the first three or all four or just the first but you can't use the fourth one or the 
            third one. These are some restrictions you have on compound indexes but compound indexes in general allow you to
             speed up queries that use multiple values if you create a compound index on these multiple values.

        * if we sort large amount of document it will be risky sorting a lot of documents at a given query, you might need 
            an   index to be able to sort them at all because mongodb has this threshold of 32 megabytes which it reserves in memory for the fetched documents and sorting them.
*/