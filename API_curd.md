# dbContorller.js

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

// class User {
// constructor(name, email, gender, status) {
// this.name = name;
// this.email = email;
// this.gender = gender;
// this.status = status;
// }
// }

const client = new MongoClient(process.env.MONG_URL);
client.connect();

// Read all
exports.findAll = async (req, res, next) => {
try {
const data = await findAllListing(client);
JSON.stringify(data);
res.send(data);
} catch (error) {
next(error);
}
};
// Read One
exports.findOne = async (req, res, next) => {
try {
if (!req.params.id) {
res.status(400).send({ message: "Name can not be emtpy" });
return;
}
const nameOfListing = req.params.id;
const data = await findOneListingByName(client, nameOfListing);
JSON.stringify(data);
res.send(data);
} catch (error) {
next(error);
}
};

// create one
exports.create = async (req, res, next) => {
// validate request
if (!req.body) {
res.status(400).send({ message: "Content can not be emtpy" });
return;
}
// new user
const user = {
name: req.body.name,
email: req.body.email,
gender: req.body.gender,
status: req.body.status,
};
console.log(user);
// save user in database
try {
await createListing(client, user);
res.send(user);
} catch (error) {
next(error);
}
};

// update one
exports.updateOne = async (req, res, next) => {
try {
// validate request
if (!req.body) {
res.status(400).send({ message: "Content can not be emtpy" });
return;
}
const result = await client
.db("NodeAPI")
.collection("users")
.updateOne({ name: req.params.id }, { $set: req.body }, { upsert: true });

    res.send(`ok update seccussfly.`);

} catch (error) {
next(error);
}
};

// delete one
exports.deleteOne = async (req, res, next) => {
try {
await client
.db("NodeAPI")
.collection("users")
.deleteOne({ name: req.params.id }, { wtimeout: 100 });
res.send(`delete successfly.`);
} catch (error) {
next(error);
}
};

// Function
async function createListing(client, newListinig) {
const result = await client
.db("NodeAPI")
.collection("users")
.insertOne(newListinig);
console.log(
`New listinig created with the following ID:${result.insertedId}`,
);
}

async function findAllListing(client) {
const result = await client
.db("NodeAPI")
.collection("users")
.find({})
.limit(8)
.toArray();
return await result;
}

// 按名字查找（one）并列出
async function findOneListingByName(client, nameOfListing) {
const result = await client
.db("NodeAPI")
.collection("users")
.findOne({ name: nameOfListing });
if (result) {
console.log(`Found a listing in th collecation with the name`);
console.log(result);
} else {
console.log(`No listings found ${nameOfListing}`);
}
return await result;
}

=============================================================================================
