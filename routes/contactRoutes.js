const express = require("express");
const router = express.Router();
const {getContact,createContact, updateContact, deleteContact} = require("../controllers/contactControllers");

router.route("/").get(getContact).post(createContact);

// router.route("/");

router.route("/:id").put(updateContact).delete(deleteContact);

// router.route("/:id");



module.exports = router;