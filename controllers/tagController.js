const Tag = require("../models/tags");
const asyncHandler = require("express-async-handler");


//view all tags
exports.get_comment_id = asyncHandler(async(req,res,next) => {

});
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
