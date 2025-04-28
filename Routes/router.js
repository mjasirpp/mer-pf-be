const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

//register API
router.post('/user/register',userController.register)
//login
router.post('/user/login',userController.login)
//add-project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)
//getuserprojects
router.get('/user/all-projects',jwtMiddleware,projectController.allUserProjects)
//getallprojects
router.get('/projects/all',jwtMiddleware,projectController.getallProjects)
//gethomeprojects
router.get('/projects/home-projects',projectController.getHomeProjects)
//editporiject
router.put('/projects/edit/:id',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProjectController)
//deleteproject
router.delete('/projects/remove/:id',jwtMiddleware,projectController.deleteProjectController)
//updateuser
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

//export router
module.exports = router