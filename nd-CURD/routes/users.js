import express from 'express'
import cors from 'cors'

import { createUser, getUser, getUsers, updateUser, deleUser } from "../controllers/users.js"
// const express = require('express')
// const cors = require('cors')

const router = express.Router()

router.use(express.json())

router.use(cors({ origin: true }))

let Users = []
let user = { name: '', age: '', iphone: '' }

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', deleUser)

router.patch('/:id', updateUser)


export default router
// module.export = router