var express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('computation',{
        randomSolution:`Sine of ${randomNumber} is ${Math.sin(randomNumber)}`,
        querySolution:`Sine of ${data} is ${Math.sin(data)}`
    })
})

module.exports=router