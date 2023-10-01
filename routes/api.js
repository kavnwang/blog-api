const express = require("express");
const router = express.Router();

const post_controller = require("../controllers/postController");
const comment_controller = require("../controllers/commentController");
const tag_controller = require("../controllers/tagController");
const month_controller = require("../controllers/monthController");
const photo_controller = require("../controllers/photoController");

//need month create, add tags

router.get("/", function(req,res) {
    res.send("home page");
});

//Posts

const Post = require("../models/posts");
const asyncHandler = require("express-async-handler");

//create a post
router.post("/posts/create", post_controller.post_create);

//view all posts
router.get("/posts/recent/:num/", post_controller.posts_get_recent);
router.get("/posts/recent/", post_controller.posts_get_recent);
router.get("/posts/popular/:num", post_controller.posts_get_popular);
router.get("/posts/popular", post_controller.posts_get_popular);

router.get("/posts/title/:title",post_controller.posts_get_title);
router.get("/posts/publish/:num", post_controller.posts_get_publish);
router.get("/posts/publish", post_controller.posts_get_publish);

router.get("/posts/unpublish/:num", post_controller.posts_get_unpublish);
router.get("/posts/unpublish", post_controller.posts_get_unpublish);

//Update post
router.post("/posts/update/:postId", post_controller.post_update);

//Delete post
router.post("/posts/delete/:postId",post_controller.post_delete);

router.get("/posts/:postId/", post_controller.post_get);

//Tags

//view all tags
router.get("/tags/view",tag_controller.get_tags);

//view posts with a tag
router.get("/tags/:tag",tag_controller.get_tag);

//view tags with a name
router.get("/tags/name/:name",tag_controller.get_tag_name);
//create tag
router.post("/tags/create",tag_controller.create_tag);

//add post to tag
router.post("/tags/:tag/add/:post",tag_controller.add_post_tag);

//delete tag
router.post("/tags/delete/:tag",tag_controller.delete_tag);

//edit tag
router.post("/tags/update/:tag",tag_controller.update_tag);


//comments

//get comment
router.get("/comments/:commentId",comment_controller.comment_get);

//get all comments
router.get("/posts/:postId/comments",comment_controller.comments_get);

//create comment
router.post("/posts/:postId/comments/create",comment_controller.comment_create);

//update comment
router.post("/posts/:postId/comments/:commentId/delete",comment_controller.comment_update);

//delete comment
router.post("/posts/:postId/comments/:commentId/delete",comment_controller.comment_delete);


//get all months
router.get("/posts/months",month_controller.months_get)
router.get("/posts/year/:year/month/:month",month_controller.month_get);

//Photos

router.post("/photos/create", photo_controller.photo_add);
router.get("/photos/", photo_controller.photo_get_all);


module.exports = router;