const express = require("express")
const Tank_model = require("../model/task")


// ! Find Function is Asynchoronous so it will return promises 
const getALLTask =  async (req , res)=>{
    try {
        const get_task = await Tank_model.find({})
        
        res.status(200).json({get_task})
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

// ! Mongoose create Function is asynchronous 
const createTask =  async (req , res)=>{
    try {
        const task_model =  await Tank_model.create(req.body) 
        res.status(200).json({ task_model})
    } catch (error) {
        res.status(404).json({msg : error})
    }

}
// ! findOne is a asynchronous so we use async and await 
// ! Get A Single Task 
const getTask=  async (req , res)=>{
    try{
    const taskID = req.params
    
    const get_Single_Task = await Tank_model.findOne({_id:taskID.id})
    
    if(!get_Single_Task){
       return res.status(404).json({msg : `No ID of ${taskID.id} exisist` })
    }
    res.status(200).json({get_Single_Task})
}catch(error){
    res.status(500).json({msg : error})
}

}


// ! Update a task 
// ! with findOneAndUpdate which is Asynchronous 
const updateTask = async (req, res)=>{
    try {
    const taskID = req.params
    const update_task = await Tank_model.findOneAndUpdate({_id : taskID.id} , req.body , {
        new:true , runValidators:true
    })
    
    if(!update_task){
        return res.status(404).json({msg : `No ID of ${taskID.id} exisist then How to update ` })
    }
    res.status(200).json({update_task})


    }catch(error){
        res.status(500).json({msg : error})
    }

}

// ! Delete A  Specific Task
// ! findOneAndDelete is  a Asynchronous  and return promises  use.. Async await 
const deleteTask = async  (req , res)=>{
    try {
    const taskID = req.params
    const delete_task = await Tank_model.findOneAndDelete({_id : taskID.id})
    if(!delete_task){
        return res.status(404).json({msg : ` No ID with ${taskID.id} Exiist`})
    }
    res.status(200).json({delete_task})
}catch(error){
    res.status(500).json({msg : error})
}

}

module.exports = {
    getALLTask , 
    createTask , 
    getTask,
    updateTask ,
    deleteTask
}