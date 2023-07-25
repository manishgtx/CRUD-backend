const User = require('../models/users')

const getUsers = async (req,res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.send(error)
    }
}

const addUser = async (req,res) => {
    try {
        const task = await User.create(req.body)
        console.log(task)
        res.status(201).json(task)
        
    } catch (error) {
        res.send(error)
    }
}

const getUser = async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findOne({_id:id})
        if(!user) {
            res.status(404).send('Not Found')
            return
        }
        res.json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findOneAndUpdate({_id:id},req.body)
        if(!user) {
            res.status(404).send('Not Found')
            return
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findOneAndDelete({_id:id})
        console.log(user)
        if(!user) {
            res.status(404).send('Not Found')
            return
        }
        res.json(user)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser
}