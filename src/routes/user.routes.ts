import { Router } from 'express'
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/user.controller'

const router = Router()

router.post('/users', createUser)
router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)

export default router