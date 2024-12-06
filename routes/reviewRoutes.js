const express = require('express')
const { getAllReviews, addNewReview, addCommentToReview } = require('../controllers/reviewController')
const router = express.Router()

router.get('/', getAllReviews)
router.post('/reviews/add-new', addNewReview)
router.post('/reviews/add-comment', addCommentToReview)

module.exports = router