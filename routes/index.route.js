const indexController = require("../controllers/index.controller");
const postController = require("../controllers/post.controller");
const auth = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", indexController.index);
router.get("/posts", postController.index);
router.get("/posts/create", postController.create);
router.post("/posts/store", postController.store);
router.get("/posts/:id", postController.details);
router.get("/posts/:id/edit", postController.edit);
router.post("/posts/:id/update", postController.update);
router.get("/posts/:id/delete", postController.delete);

module.exports = router;
