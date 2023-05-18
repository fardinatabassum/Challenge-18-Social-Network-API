// // const router = require("express").Router();

// const {
// } = require("../../controllers/user-controller");


// const router = require('express').Router();
// const {
//     createUser,
//     getUsers,
//     getSingleUser,
//     addFriend,
//     deleteFriend,
// } = require('../../controllers/user-controller');

// router.route('/').get(getUsers).post(createUser);

// router.route('/:userId').get(getSingleUser);

// router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// module.exports = router;


// // new code 
// const router = require('express').Router();

// const {
//     getUser,
//     getSingleUser,
//     createUser,
//     updateUser,
//     deleteUser,
//     addFriend,
//     deleteFriend
// } = require('../../controllers/userController');

// // /api/users GET all and POST 
// router.route('/').get(getUser).post(createUser);

// // /api/users/:userId GET one user, PUT and DELETE by user's ID
// router.route('/:userId')
// .get(getSingleUser)
// .put(updateUser)
// .delete(deleteUser);

// // /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
// router.route('/:userId/friends/:friendId')
// .post(addFriend)
// .delete(deleteFriend);

// module.exports = router;

// new code
const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// /api/users GET all and POST 
router.route('/').get(getUser).post(createUser);

// /api/users/:userId GET one user, PUT and DELETE by user's ID
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;