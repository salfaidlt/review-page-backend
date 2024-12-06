const prisma = require('@prisma/client').PrismaClient
const PrismaClient = new prisma()

const getAllReviews = async (req, res) => {
    const reviews = await PrismaClient.review.findMany({
        include: {
            user: true, // Include user details
            reviewComments: true, // Include associated comments
            ReviewLike: true, // Include likes if relevant
        },
    })
    res.status(200).send(reviews)
}

module.exports.getAllReviews = getAllReviews