const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/postController");
const comment_controller = require("../controllers/commentController");
const tag_controller = require("../controllers/tagController");
const month_controller = require("../controllers/monthController");


router.get("/", function(req,res) {
    res.send("home page");
});

//Posts

//create a post
router.get("/posts/create", post_controller.get_post_create);
router.post("/posts/create", post_controller.post_post_create);

//view all posts
router.get("/posts/view/recent/:num", post_controller.get_post_view_recent);
router.get("/posts/view/popular/:num", post_controller.get_post_view_popular);
router.get("/posts/view/title/:title",post_controller.get_post_view_title);
router.get("/posts/view/publish/:num", post_controller.get_post_view_publish);
router.get("/posts/view/unpublish/:num", post_controller.get_post_view_unpublish);

router.get("/posts/view/:postId", post_controller.post_post_view_id);

//Update post
router.get("/posts/update/:postId", post_controller.get_post_update_id);
router.get("/posts/update/:postId/publish", post_controller.get_post_update_id_publish);
router.get("/posts/update/:postId/unpublish", post_controller.get_post_update_id_unpublish);

router.post("/posts/update/:postId", post_controller.post_post_update_id);
router.post("/posts/update/:postId/publish", post_controller.post_post_update_id_publish);
router.post("/posts/update/:postId/unpublish", post_controller.post_post_update_id_unpublish);

//Delete post
router.get("/posts/delete/:postId",post_controller.get_post_delete);
router.post("/posts/delete/:postId",post_controller.post_post_delete);

//Tags

//view all tags
router.get("/tags/view",tag_controller.get_tag_list);

//view posts with a tag
router.get("/tags/:tag",tag_controller.get_tag_id);

//create tag
router.get("/tags/create",tag_controller.get_create_tag);
router.post("/tags/create",tag_controller.post_create_tag);

//delete tag
router.get("/tags/delete/:tag",tag_controller.get_delete_tag);
router.post("/tags/delete/:tag",tag_controller.post_delete_tag);

//edit tag
router.get("/tags/update/:tag",tag_controller.get_update_tag);
router.post("/tags/update/:tag",tag_controller.post_update_tag);

//comments


//get comment
router.get("/posts/:postId/comments/:commentId",comment_controller.get_comment_id);

//get all comments
router.get("/posts/:postId/comments",comment_controller.get_comment_list);

//create comment
router.get("/posts/:postId/comments/create",comment_controller.get_comment_create);
router.post("/posts/:postId/comments/create",comment_controller.post_comment_create);

//update comment
router.get("/posts/:postId/comments/:commentId/update",comment_controller.get_comment_update);
router.post("/posts/:postId/comments/:commentId/delete",comment_controller.post_comment_update);

//delete comment
router.get("/posts/:postId/comments/:commentId/delete",comment_controller.get_comment_delete);
router.post("/posts/:postId/comments/:commentId/delete",comment_controller.post_comment_delete);

//get all months
router.get("/posts/view/date",month_controller.get_month_list)
router.get("/posts/year/:year/month/:month",month_controller.get_month_posts);
module.exports = router;