// db.student.aggregate([
//     {
//         $lookup: {
//             from: "teacher",
//             localField: "teacher",
//             foreignField: "name",
//             as: "teacher"
//         }
//     }
//     ])
    
    db.student.aggregate([
        {
            $lookup: {
             from: "teacher",
             localField: "teacher",
             foreignField: "name",
             as: "teacher"
            }
        },
        {$unwinde: "$teacher"}
        ])