console.log('hi, The is Client......')

const form = document.querySelector('form')
const loadingElement = document.querySelector('.loading')
const mewsElement = document.querySelector('.mews')
const API_URL = 'http://localhost:15005/mews/'
form.style.display = ''
loadingElement.style.display = 'none'

// listAllMews()

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log("监听到按键已经按下... ...")
    const formData = new FormData(form)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const context = formData.get('context')

    const Mew = {
        name, phone, context,
    }

    form.style.display = 'none'
    loadingElement.style.display = ''
    console.log(Mew)

    fetch(API_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(Mew),
    })
        .then(response => response.json())
        .then(createdMews => {
            console.log(createdMews)   //  createdMews
            form.reset()
            form.style.display = ''
            loadingElement.style.display = 'none'
        })
})


document.getElementById('listall').addEventListener('click', listAllMews)

function listAllMews() {
    let output = []
    fetch(API_URL)
        .then(response => response.json())
        .then(mews => {
            console.log(mews)
            // res.json(mews)
            mews.forEach((doc) => {
                console.log(doc)

                const div1 = document.createElement('div')
                const header = document.createElement('h5')
                header.textContent = doc.name
                const cont = document.createElement('p')
                cont.textContent = doc.context

                div1.appendChild(header)
                div1.appendChild(cont)

                mewsElement.appendChild(div1)
            });
        })
}
