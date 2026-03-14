const express=require("express")
const bodyParser=require("body-parser")
const createPlan=require("./ai")

const app=express()

app.use(bodyParser.json())
app.use(express.static("frontend"))

app.post("/generate",async(req,res)=>{

let plan = await createPlan(req.body)

res.json({plan})

})

app.listen(3000,()=>{
console.log("AI Study Planner running")
})
