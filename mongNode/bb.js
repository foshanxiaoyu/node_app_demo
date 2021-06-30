const abc = require('./ab.js');
// const tei2 = require('./ab.js');
// const tei2 = require('./ab')
// const client = require('./ab')
// const test1 = require('./ab.js')

async function main() {

    try {
        console.log(`1.--This is bb.js called ab.js [hei() function]`)

        await abc.hei('Xiao')

        await abc.tei2(56)

        await abc.client.connect()
        await abc.test1(abc.client, {
            minimumNumberOfBedrooms: 6,
            minimumNumberOfBathrooms: 8,
            maximumNumberOfResults: 2,
        })


    } catch (e) {
        console.log(e)
    } finally {
        await abc.client.close()
        console.log()

        return console.log(`GOME OVER`)
    }
}

main().catch(console.error)

