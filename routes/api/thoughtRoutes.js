const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    createReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughtController.js');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;