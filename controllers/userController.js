const prisma = require('@prisma/client').PrismaClient
const PrismaClient = new prisma()

const checkAndAddUser = async (req, res) => {
    const { email, name } = req.body
    
    try {
        let user = await PrismaClient.user.findUnique({
            where: { email: email }
        })
        console.log('====================================');
        console.log(user);
        console.log('====================================');
    
        if (!user && name) {
            let user = await PrismaClient.user.create({
                data: {
                    name: name,
                    email: email
                }
            })
            res.status(200).json({
                message: "user created",
                user
            })
        }
        res.status(200).json({
            message: "user already exists", 
            user
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = checkAndAddUser