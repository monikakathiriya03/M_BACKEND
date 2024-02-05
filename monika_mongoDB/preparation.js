// mongosh      ---1
//use ecommerce
// load("file_name.js");

// db.collection_name.find({})    ----4,5,6,7

// db.customer.insertMany([       
//     {
//         customer_id: "C001",
//         first_name: "Monika",
//         last_name: "Kathiriya",
//         email: "moni@test.in",
//         password: "M123"
//     },
//     {
//         customer_id: "C002",
//         first_name: "Srushti",
//         last_name: "Sojitra",
//         email: "srushti@test.in",
//         password: "S123"
//     },
//     {
//         customer_id: "C003",
//         first_name: "Rensi",
//         last_name: "Shiroya",
//         email: "renc@test.in",
//         password: "R123"
//     }
// ]);




    // -----update----
    // db.student.updateOne(
    //     {firstname: "monika"},
    //     {$set: {email: "monika@gmail.com"}},
    //     {upsert: true}
    // );

 //---- 8 ---
//  db.orders.aggregate([
//     {
//       $lookup: {
//         from: "customers",
//         localField: "customer_id",
//         foreignField: "customer_id",
//         as: "customer"
//       }
//     },
//     {
//       $unwind: "$customer"
//     },
//     {
//       $lookup: {
//         from: "order_items",
//         localField: "order_id",
//         foreignField: "order_id",
//         as: "order_items"
//       }
//     },
//     {
//       $unwind: "$order_items"
//     },
//     {
//       $lookup: {
//         from: "products",
//         localField: "order_items.product_id",
//         foreignField: "product_id",
//         as: "product"
//       }
//     },
//     {
//       $unwind: "$product"
//     }]);

    //-----10-----
    // db.customers.aggregate([
    //     {
    //       $match: {
    //         email: "vk17@gmail.com"
    //       }
    //     },
    //     {
    //       $lookup: {
    //         from: "orders",
    //         localField: "customer_id",
    //         foreignField: "customer_id",
    //         as: "orders"
    //       }
    //     },
    //     {
    //       $unwind: "$orders"
    //     },
    //     {
    //       $project: {
    //         _id: 0,
    //         order_id: "$orders.order_id",
    //         order_date: "$orders.order_date",
    //         total_price: "$orders.total_price"
    //       }
    //     }
    //   ])

    // -----11----
    // db.products.aggregate([
    //     {
    //       $match: {
    //         category: "5G"
    //       }
    //     },
    //     {
    //       $sort: {
    //         product_price: 1
    //       }
    //     }
    //   ])