// setTimeout(() => console.log('煮饭'), 3000)
//     .then(() => {
//         console.log('洗菜')
//     }, 2000)
//     .then(() => { console.log('切菜') }, 500)

const names = ['John', 'Jack', 'Mike']
const greet = names.map(name => `Hello ${name}`) // callbackfn string[]
console.log(greet)

// UI change



function uiChange(text, count) {

    const previews22Element = document.querySelector('.previews22')
    console.log(count)

    const div1 = document.createElement('div')
    const header1 = document.createElement('li')
    header1.textContent = text

    div1.appendChild(header1)

    previews22Element.appendChild(div1)
}

greet.forEach((doc, i) => {
    uiChange(doc, i)
})

// ##########
// const hasMeeting = 0

// const meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: 'Maketing Meeting',
//             location: 'skype',
//             time: '1.00 PM'
//         }
//         resolve(meetingDetails)
//     } esle {
//         reject(new Error('Meeting alreadly scheduled'))
//     }
//     meeting
//         .then(res => {
//             // Resolve Data
//             console.log('Meeting scheduled')
//             console.log(res)
//         })
//         .catch(err => {
//             // Reject Data
//             console.log(err.message)
//         })
// })
// ##########

//###############  Promise all call #######
const p1 = Promise.resolve('P1 complate')
p1.then((value) => {
    setTimeout(() => {
        console.log(value);
        // expected output: xxx
    }, 3000)
});

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promis 2 complete')
    }, 1000)
})

Promise.all([p1, p2]).then(res => console.log(res))