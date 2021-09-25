const express = require('express');
const app = express();

const cors = require("cors");
//const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

const {Pool,Client} =require('pg');
const connectionString = 'postgressql://postgres:com@1234@localhost:5432/carstore-management'
const client = new Client({
    connectionString:connectionString
})

client.connect()
// client.query('SELECT * from cars',(err,res)=>{
//     console.log(err,res)
//     client.end()
// });
app.post("/create",async (req,res) => 
{
   
 try {
    const id =req.body.id;
    const name =req.body.name;
    const description =req.body.description;
    const rdate =req.body.rdate;
    const email =req.body.email;
    const pnumber =req.body.pnumber;
    const cost =req.body.cost;
    
    const newTodo = await client.query("INSERT INTO newcar (id,name,description,rdate,email,pnumber,cost) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
    [id,name,description,rdate,email,pnumber,cost]
        );
        res.json(newTodo.rows[0]);



    } catch (err) {
        
        console.error(err.message);
    }
 

});
app.get("/cars",async (req,res)=>{
    try {
        const allTodos=await client.query("SELECT * FROM newcar");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
   

});
app.get("/carsel",async (req,res)=>{
    try {
        const allTodos=await client.query("SELECT * FROM newcar");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
   

});
//  //get a todo
//  app.get("/cars/:di",async(req,res) => {

//     try {
//         const { di } =req.params;
//         const todo = await client.query("SELECT  * FROM cars WHERE id =$1",[di]);

//         res.json(todo.rows[0]);

//     } catch (err) {
//         console.error(err.message);
//     }

// });

// //update a todo
// app.put("/edit/:di",async(req,res)=>{
//     try {

//         const { di } =req.params;
//         const id =req.body.id;
//         const name =req.body.name;
//         const description =req.body.description;
//         const rdate =req.body.rdate;
//         const email =req.body.email;
//         const pnumber =req.body.pnumber;
//         const cost =req.body.cost;
//         const updateTodo = await client.query("UPDATE newcar SET id=$1,name=$2,description =$3,rdate=$4,email=$5,pnumber=$6,cost=$7 WHERE id = $8",[id,name,description,rdate,email,pnumber,cost,di]);
//         res.json("Car  is updated");
//     } catch (err) {
//         console.error(err.message);
        
//     }

// });
app.put("/carse",(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const description=req.body.description;
    const rdate=req.body.rdate;
    const email=req.body.email;
    const pnumber=req.body.pnumber;
    const cost=req.body.cost;
    client.query("UPDATE newcar SET name=$1,description =$2,rdate=$3,email=$4,pnumber=$5,cost=$6 WHERE id = $7",[name,description,rdate,email,pnumber,cost,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    }
    );
});
//update_wage

app.put("/update",(req,res)=>{
    const id=req.body.id;
    const cost=req.body.cost;
    client.query("UPDATE newcar SET cost= $1 WHERE id= $2",[cost,id],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    }
    );
});

//delete a todo
app.delete("/delete/:id",async(req,res)=>{
    try {

        const {id}= req.params;
        const deleteTodo = await client.query("DELETE FROM newcar WHERE id =$1",[id]);

        res.json("Car is deleted");
         
    } catch (err) {
        console.error(err.message);
        
    }

});


app.listen(5000,()=>
{
    console.log("server is running on port 5000");
});