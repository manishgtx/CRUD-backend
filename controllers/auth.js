const jwt = require('jsonwebtoken')
const login = async(req,res) => {
    const {userName,password} = req.body
    if(!userName || !password) {
        res.status(400).send('Please enter username and password')
        return
    }
    const token = jwt.sign({id:7,name:'Manish Kushwaha'},'manish',{expiresIn: '30d'})
    console.log(token)
    res.status(200).json({token})
}

const dashboard = async(req,res) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).send('Something Wrong With Auth')
        return
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token,'manish')
        res.send('You have successfully logged in to dashboard')
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = {login,dashboard}