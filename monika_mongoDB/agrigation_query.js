/*
MongoDB Agrigation
1. $match     2. $project   3. $limit     4. $skip  
5. $count     6. $sort      7. $group     8. $lookup
9. $unwind
*/

// db.book.find()
// db.book.find({"pages" :{$lte:209}})

// db.book.aggregate([
//     {$match: {"pages":{$lte:209},"country" : "Nigeria"}}
//     ])
    
    
    // db.book.find({},{author:1, country:1, pages:1, _id:0})
    // db.book.find({}).projection({author:1, country:1, pages:1, _id:0})
    
    // db.book.aggregate([
    //     {$match: {"pages":{$lte:209},"language": "English"}},
    //     {$project: {author:1, country:1} }
    //     ])
       
       
    //   db.book.find().limit(5)
// db.book.aggregate([
//      {$match: {"pages":{$lte:209}}},
//      {$project: {author:1, country:1} },
//     {$limit: 2}
//     ])


// db.book.find().select({author:1, country:1}).skip(50).limit(5)
// db.book.aggregate([
//     {$skip: 5}
//     ])

//   db.book.find({"pages":{$lte:209}}).count()
// db.book.aggregate([
//     {$match: {"pages":{$lte:209}}},
//     {$count : "Total Count" }
//     ])
   
   
   
//   db.book.find({"pages":{$lte:209}}).sort({pages:1, author:-1})
// db.book.aggregate([
//     {$sort : {author:-1}}
//     ])