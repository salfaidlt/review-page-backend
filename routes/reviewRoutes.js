const express = require('express')
const { getAllReviews, addNewReview } = require('../controllers/reviewController')
const router = express.Router()

router.get('/', getAllReviews)
router.post('/reviews/add-new', addNewReview)

module.exports = router