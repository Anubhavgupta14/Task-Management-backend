const Taskmodel = require('../models/Taskmodel')
module.exports.getTask = async(req,res)=>{
    const task = await Taskmodel.find()
    res.send(task)
}

module.exports.saveToDo = async (req,res)=>{
    const {Task,Duedate,Description,Priority,Status} = req.body
    Taskmodel
    .create({Task,Duedate,Description,Priority,Status})
    .then((data)=>{
        console.log("Added Successfully")
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async (req, res) => {
    const { _id, Task, Duedate, Description, Priority, Status } = req.body;
    try {
      const updatedTask = await Taskmodel.findByIdAndUpdate(
        _id,
        { Task, Duedate, Description, Priority, Status },
        { new: true } // Set "new" option to true to return the updated document
      );
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Updated Successfully', task: updatedTask });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

module.exports.deleteToDo  = async(req,res)=>{
    const {_id} = req.body
    Taskmodel
    .findByIdAndDelete(_id)
    .then(()=>res.send({ "message": "Deleted Successfully" }))
    .catch((err)=>console.log(err))
}