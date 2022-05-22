const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    createFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require('../../controllers/userRoutes');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(createFriend)
    .delete(deleteFriend);

module.exports = router;