const { MongoClient } = require('mongodb')
// const abc = require('./read')
// const readMem = require('./read')

async function main() {
    // const uri = 'mongodb://admin:password@localhost:27017'
    const uri = ''
    const Optional = { useUnifiedTopology: true }
    // const Optional = { useNewUrlParser: true, useUnifiedTopology: true }

    const client = new MongoClient(uri)  // void;
    // const client = new MongoClient(uri, Optional)  //Promise<MongoClient>;

    try {
        await client.connect()

        // listDatabases(client)

        // await createListing(client, {
        //     name: 'Lovely loft',
        //     summary: 'A charming loft in',
        //     bedrooms: 1,
        //     bathroom: 1
        // })

        // await createMulitpleListings(client, [
        //     { name: 'Lovely1 loft', summary: '1 charming loft in', bedrooms: 1, bathroom: 1 },
        //     { name: 'Lovely2 loft', summary: '2 charming loft in', bedrooms: 2, bathroom: 2 },
        //     { name: 'Lovely3 loft', summary: '3A charming loft in', bedrooms: 3, bathroom: 3 },
        //     { name: 'Lovely4 loft', summary: '4A charming loft in', bedrooms: 4, bathroom: 4 },
        // ])

        // await findOneListingByName(client, {}) // Lovely4 loft  肖剑
        // await findOneListingByName(client, 'Lovely4 loft') // Lovely4 loft  肖剑  管晓青
        // await findAllListing(client)
        // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews1(client, {
        await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews2(client, {
            minimumNumberOfBedrooms: 6,
            minimumNumberOfBathrooms: 8,
            maximumNumberOfResults: 5,
        })

    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }
}

main().catch(console.error)

// 创建 Document in Collection CreateListing (One)
async function createListing(client, newListinig) {
    const result = await client.db('sample_airbnb').collection('listingsAndReviews').insertOne(newListinig)
    console.log(`New listinig created with the following ID:${result.insertedId}`)

}

// 创建 Document in Collection CreateListing (Multiple)
async function createMulitpleListings(client, newListinigs) {
    const result = await client.db('sample_airbnb').collection('listingsAndReviews').insertMany(newListinigs)
    console.log(`${result.insertedCount} New listinigs created with the following ID(S):`)
    const Ids = result.insertedIds
    console.log(Ids)

}


// 按名字查找（one）并列出
async function findOneListingByName(client, nameOfListing) {
    // const result = await client.db('EmployeeDB').collection('employee').findOne({ name: nameOfListing })

    const result = await client.db('sample_airbnb').collection('listingsAndReviews').findOne({ name: nameOfListing })
    if (result) {
        console.log(`Found a listing in th collecation with the name`)
        console.log(result)
    } else {
        console.log(`No listings found ${nameOfListing}`)
    }
}

// 列出指定collecation 中的记录find({})，可以加 limit 限制列出记录
async function findAllListing(client) {
    const result = await client.db('EmployeeDB').collection('employee').find({}).limit(2)
    // const result = await client.db('sample_airbnb').collection('listingsAndReviews').find({}).limit(1)


    result.each((err, doc) => {
        if (err) throw err
        if (doc) console.log(doc)
    })
}

// Find() 解构用法
async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews2(client, {
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


// 列出 MongoDB 中的数据库
async function listDatabases(client) {
    const databaseslist = await client.db().admin().listDatabases()
    console.log('MongoDb集群中的数据库列表：')
    databaseslist.databases.forEach(db => {
        console.log(`-${db.name}`)

    });
}




