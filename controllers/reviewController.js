const prisma = require('@prisma/client').PrismaClient
const PrismaClient = new prisma()

const getAllReviews = async (req, res) => {
    const reviews = await PrismaClient.review.findMany({
        include: {
            user: true, // Include user details
            reviewComments: {
                include: {
                    user: true
                }
            }, // Include associated comments
            ReviewLike: true, // Include likes if relevant
        },
    })
    res.status(200).send(reviews)
}

const addNewReview = async (req, res) => {
    const { email, service, comment, rating } = req.body
    const user = await PrismaClient.user.findUnique({
        where: { email }
    })
    const userId = user.id
    if (user) {
        const review = await PrismaClient.review.create({
            data: { service, comment, rating, userId}
        })
        console.log('====================================');
        console.log(review);
        console.log('====================================');
        res.status(201).json(review)
    } else {
        res.status(401).json({
            message: "User not found"
        })
    }
    
}

const addCommentToReview = async (req, res) => {
    const { comment, email, reviewId } = req.body
    const user = await PrismaClient.user.findUnique({
        where: { email }
    })
    if (user) {
        const userId = user.id
        const reviewComment = await PrismaClient.reviewComment.create({
            data: { content: comment, userId, reviewId}
        })
        console.log('====================================');
        console.log(reviewComment);
        console.log('====================================');
        res.status(201).json(reviewComment)
    } else {
        res.status(401).json({
            message: "User not found"
        })
    }
}

module.exports.getAllReviews = getAllReviews
module.exports.addNewReview = addNewReview
module.exports.addCommentToReview = addCommentToReview