import express from "express";
import cors from "cors"
const app = express();


app.use(cors(
    {
        origin:"http://localhost:5173",
        methods:["GET" , "POST" , "PUT" , "DELETE"],
        credentials:true
    }
))

app.get("/" , (req , res)=>{
   res.send("hello");
})

/*app.get("/product" , (req,res)=>{

    res.send(
        [
            {
                "id" : 1,
                "product" : "toothpast"
            },
            {
                "id" : 2,
                "product" : "laptop"
            },
            {
                "id" : 3,
                "product" : "mobile"
            }
        ]
    )
})
    */

/*
app.get("/:id" , (req , res)=>{

    const arr = [
        {
            "name" : "sachin",
            "email" : "sachin@gmail.com",
            "mobile" : 9594500124
        },
        {
            "name" : "suraj",
            "email" : "suraj@gmail.com",
            "mobile" : 123456789
        },
        {
            "name" : "shubham",
            "email" : "shubham@gmail.com",
            "mobile" : 987456
        }
    ]

    const obj  = arr.filter((user)=> user.mobile === Number(req.params.id));

    res.send(obj)
})
    */


app.get("/:color" , (req , res)=>{

    res.send(req.params.color);

})
    

app.listen(8000, ()=>{
    console.log("server is running on port 8000");
})