import express from "express";
const app=express();
const port:number=3000;

app.get("/*",(req,res)=>{
    res.json({
        message: "Iam jitender and iam Learning ci/cd",
        anothermessage: "hahahahahah"
    })
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
