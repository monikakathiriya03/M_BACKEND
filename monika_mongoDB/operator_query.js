db.book.find()

// ----- comparision operator ----- 

// db.book.find({"pages" : {$eq : 384}})
// db.book.find({"pages" : {$ne : 384}})

//  db.book.find({"pages" : {$lt : 320}})
//  db.book.find({"pages" : {$lte : 320}})
 
//  db.book.find({"pages" : {$gt : 505}})
//  db.book.find({"pages" : {$gte : 505}})

// db.book.find({"pages" : {$in : [320, 505, 928]}})
// db.book.find({"pages" : {$nin : [320, 505, 928]}})



// ----- logical operator -----

// db.book.find({ $and: [{"pages" : {$eq : 384}}, {"year" : 1350}]})
// db.book.find({ $or: [{"pages" : {$eq : 384}}, {"year" : {$in: [1350, 1836, 1958]}}]})
// db.book.find({ $nor: [{"pages" : {$eq : 384}}, {"year" : {$in: [1350, 1836, 1958]}}]})
// db.book.find({"pages" : {$not: {$lte: 384}}})