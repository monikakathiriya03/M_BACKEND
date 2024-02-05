// use development
// show dbs
// show collections

// db.createCollection("user");

db.student.insertOne({
    name: "John",
    age: 20,
    email: "john@test.in",
    hobbies: ["Sport","Dancing"],
    address: {
        line1: "208,City-center",
        line2: "Yogichowk",
        city: "Surat",
        state: "Gujarat"
       
    }
});


