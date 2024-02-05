db.book.find()


// db.book.aggregate([
//     {
//         $group: {_id: "$language", total: {$sum: 1}},
//     }
//     ])
    
//   db.book.aggregate([
//       {
//           $group: {_id: {language: "$language", author: "$author"}, total: {$sum: 1}},
//       }
//       ])
       
       
    //   db.book.aggregate([
    //       {
    //           $group: {
    //               _id: {language: "$language"},
    //               author: {$push: "$author"}
    //           }, 
    //       }
    //       ])


    