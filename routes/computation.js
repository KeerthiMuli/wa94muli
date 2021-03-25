var express=require('express')
var router=express.Router()

router.get('/',(req,res)=>{
    let r=Math.floor(Math.random()*100)+1
    let s=req.query.x
    console.log(data)
    res.render('computation',{
        randomSolution:`Sin of ${r} is ${Math.sin(r)}`,
        querySolution:`Sin root of ${s} is ${Math.sin(s)}`
    })
})

module.exports=router