
export const getUsers = (req, res) => {
    res.send(`<h2>This is router /users.js</h2>`)
}

export const getUser = (req, res) => {
    const { id } = req.params
    res.send(`<h2>GET user with ID: [${id}]  in  router /users.js</h2>`)
}

export const createUser = (req, res) => {
    console.log('POST ROUTE reached')
    user = req.body
    Users.push({ ...user, id: uuidv4() })
    res.send(`<h2>User with the name ${user.name} /users.js</h2>`)
}

export const deleUser = (req, res) => {
    res.send(`<h2>delete in  router /users.js</h2>`)
}

export const updateUser = (req, res) => {
    res.send(`<h2>path in  router /users.js</h2>`)
}