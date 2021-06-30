
function hei(name) {
    console.log()
    console.log(`${name}--Yes command! This is ab.js [hei] function`)
}

function tei2(age) { //MAX_SAFE_INTEGER
    console.log(`今年已经${age}岁了 `)
}


const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://dev11:dev1234455@cluster-yu.ixch7.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(uri)



async function test1(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {

    const cursor = client.db("sample_airbnb").collection("listingsAndReviews")
        .find({
            bedrooms: { $gte: minimumNumberOfBedrooms },
            bathrooms: { $gte: minimumNumberOfBathrooms },
        }
        )
        .sort({ last_review: -1 })
        .limit(maximumNumberOfResults);

    const results = await cursor.toArray();
    console.log(results.length)

    // Print res
    if (results.length > 0) {
        console.log(`Found listing(s) with least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`)
        results.forEach((result, i) => {
            const date = new Date(result.last_review).toDateString()

            console.log()
            console.log(`${i + 1}.name:${result.name}`)
            console.log(`   id:${result._id}`)
            console.log(`   bedrooms:${result.bedrooms}`)
            console.log(`   bathrooms:${result.bathrooms}`)
            console.log(`   most recent review date:${date}`)
        })
    } else {
        console.log(`No listing(s) with least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`)
    }
}

module.exports.hei = hei;
module.exports.tei2 = tei2;
module.exports.test1 = test1;
module.exports.client = client;