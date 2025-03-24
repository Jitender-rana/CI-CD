import express from "express";
const app=express();
const port:number=3000;

app.use(express.json());

app.post("/*",(req,res)=>{

})

app.get("/*",(req,res)=>{
    res.json({
        message: "Iam jitender and iam Learning ci/cd",
        working: "fine",
        done: false,
        changed: "yes",


    })
})
app.get("/cicd",(req,res)=>{
    res.json({
        message: "ci/cd is implemneted"
    })
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
