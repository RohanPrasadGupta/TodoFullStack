import express from 'express'
import { AddUserRouteFunc, ServerMainPage , GetAllUser , LoginUser, LogoutUser, GetMyProfile } from '../controllers/UserController.js'
import { isAuthenticated } from '../middlewares/auth.js'


const router = express.Router()



router.post('/new', AddUserRouteFunc)

router.get('/all', GetAllUser)

router.get('/login', LoginUser)

router.get('/logout', LogoutUser)

router.get('/', ServerMainPage)

router.get("/me" , isAuthenticated ,GetMyProfile)

export default router;

