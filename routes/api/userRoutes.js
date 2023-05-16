// const router = require("express").Router();

const {
} = require("../../controllers/user-controller");


const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
