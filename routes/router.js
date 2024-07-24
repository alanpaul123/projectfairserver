const express = require("express");
const userController = require("../controllers/userController");
const projectController = require("../controllers/projectController");
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const multerMiddleware = require("../middlewares/multerMiddleware");

const router = new express.Router();

// register
router.post("/register", userController.registerController);
// Login http://localhost:3000/login
router.post("/login", userController.loginController);
// add project
router.post(
  "/project/add",
  jwtMiddleware,
  multerMiddleware.single("projectImg"),
  projectController.addProjectController
);

// home projects
router.get("/get-home-projects", projectController.getHomeProjects);
// all Projects
router.get(
  "/all-projects",
  jwtMiddleware,
  projectController.allProjectsController
);

// user projects
router.get(
  "/user-projects",
  jwtMiddleware,
  projectController.getuserProjectsController
);

// edit project

router.put("/project/:pid/edit", jwtMiddleware, multerMiddleware.single("projectImg"),projectController.editProjectController
);

// remove project

router.delete("/project/:pid/remove",jwtMiddleware,projectController.removeProjectController)




// edit project 

router.put("/user/edit",jwtMiddleware,multerMiddleware.single("profilePic"),userController.editProfileController)


module.exports = router;