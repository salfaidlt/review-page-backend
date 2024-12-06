const prisma = require('@prisma/client').PrismaClient
const PrismaClient = new prisma()

const checkAndAddUser = async (req, res) => {
    const { email, name } = req.body
    
    try {
        let user = await PrismaClient.user.findUnique({
            where: { email: email }
        })
    
        if (!user && name) {
            let user = await PrismaClient.user.create({
                data: {
                    name: name,
                    email: email
                }
            })
            console.log('====================================');
            console.log("just created " + user);
            console.log('====================================');
            res.status(201).json(user)
        }
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        res.status(200).json(user)
    } catch (error) {
        console.error(error)
    }
}

module.exports = checkAndAddUser