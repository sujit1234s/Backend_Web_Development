//server ko create krna

const express = require("express")


const app = express()

app.use(express.json())
const notes = []

//api create by post /notes


app.post('/notes', (req, res) => {
  console.log(req.body)
  notes.push(req.body)
  res.status(201).json({message: "note created Successfully"})
});

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })

app.delete('/notes/:index',(req,res)=>{

    const index = req.params.index
     
    delete notes[ index ]
    res.status(200).json
    ({
           message: "note deleted successfully"
    })

})    
})

module.exports = app
