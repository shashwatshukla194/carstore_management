import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav';
import About from './About';
import Shop from './Shop';


import{BrowserRouter as Router, Switch,Route} from 'react-router-dom';
// import Show from "./Show";



 function App() {
// id-int
// name-varchar(255)
// description-varchar(255)
// release_date-date
// sales_email-varchar(255)
// sale_phone-number
// cost-Float

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rdate, setRdate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [pnumber,setPnumber]  = useState("");
  const [cost,setCost]  = useState(0);
  const [carList, setcarList] = useState([]);

  const [newName,setNewName] =useState([]);
  const [newDescription,setNewDescription] =useState([]);
  const [newRdate,setNewRdate] =useState([]);
  const [newEmail,setNewEmail] =useState([]);
  const [newPnumber,setNewPnumber] =useState([]);

  const [newCost,setNewCost] = useState([]);

  const addCar = () => {
  Axios.post("http://localhost:5000/create", {
    id:id,
    name:name,
    description:description,
    rdate:rdate,
    email:email,
    pnumber:pnumber,
    cost:cost,
 }).then(() => {
        console.log("success");
      

    });
  };

  const getCars = () => {
    Axios.get("http://localhost:5000/cars").then((response) => {
      console.log(response);
      setcarList(response.data);
    });
  };

  // const editCarCost = (id) => {
  //   Axios.put("http://localhost:5000/update", { cost: newCost, id: id }).then(
  //     (response) => {
  //       setcarList(
  //         carList.map((val) => {
  //           return val.id == id
  //             ? {
  //               id:val.id,
  //               name:val.name,
  //               description:val.description,
  //               rdate:val.rdate,
  //               email:val.email,
  //               pnumber:val.pnumber,
  //               cost:newCost,
  //               }
  //             : val;
  //         })
  //       );
  //     }
  //   );
  // };

  const deleteCar = (id) => {
   if (window.confirm("are you sure ??")){
    
    Axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
      setcarList(
      carList.filter((val) => {
          return val.id != id;
        })
      );
    });
   };
  };
   const editCar = (id) => {
    Axios.put("http://localhost:5000/carse",{name:newName,description:newDescription,rdate:newRdate,email:newEmail,pnumber:newPnumber,cost:newCost,id: id}).then(
      (response) => {
        setcarList(
          carList.map((val)=>{
            return val.id == id
            ?{
             id:val.id,
             name:newName,
             description:newDescription,
             rdate:newRdate,
             email:newEmail,
             pnumber:newPnumber,
             cost:newCost,
            }
            : val;
          })
        );
      }
     );
   };
 




  return (
    
    <div className="App">
      <Router>
    <div className="App">
      <Nav />

      <Switch>
{/*          
      <Route path ="/" exact component={Home} /> */}
      <Route exact path ="/about"  component={About} />
      <Route exact path ="/shop"  component={Shop} />
      {/* <Route path ="/show" exact component={Show}/> */}
      
      {/* <Route path ="/shop/:id" component={ItemDetail}/> */}
      </Switch>
      <div>
        
      </div>
    </div>
    </Router>
      <div className="information">
      <label>ID</label>
      <input type="number" 
      onChange={(event)=>{
        setId(event.target.value);
      }}
      />
      <label>Name</label>
      <input type= "text"
      onChange={(event)=>{
        setName(event.target.value);
      }}
       />
      <label>Description</label>
      <input type= "text" 
      onChange={(event)=>{  
        setDescription(event.target.value);
      }}
    />
      <label>Release Date</label>
      <input type= "date"
      onChange={(event)=>{
        setRdate(event.target.value);
      }}
       />
     
      <label>Email</label>
      <input type= "text"
      onChange={(event)=>{
        setEmail(event.target.value);
      }}
       />
      <label>Phone Number</label>
      <input type= "text" 
      onChange={(event)=>{
        setPnumber(event.target.value);
      }}
      /> 
      <label>Cost</label>
      <input type= "number"
      onChange={(event)=>{
        setCost(event.target.value);
      }}
      />

      <button type="button"
      class="btn btn-success" 
      
      onClick={addCar}>Add Car</button>
      
      
      </div>
      <div className="cars">
        <button class = " btn btn-primary"onClick={getCars}>Show all</button>
        
        {carList.map((val,key)=>
        {
          return (
          <div className="car">
            <div>
            <h3>{val.id}</h3>
            <h3>{val.name}</h3>
            <h3>{val.description}</h3>
            <h3>{val.rdate}</h3>
            <h3>{val.email}</h3>
            <h3>{val.pnumber}</h3>
            <h3>{val.cost}</h3>
            </div>

            <div>
            <input 
              type="text" placeholder={val.name}onChange={(event)=>{
                 setNewName(event.target.value);
               }}
               /> <input 
               type="text" placeholder={val.description}onChange={(event)=>{
                  setNewDescription(event.target.value);
                }}
                /> <input 
                type="date" placeholder={val.rdate}onChange={(event)=>{
                   setNewRdate(event.target.value);
                 }}
                 /> <input 
                 type="text " placeholder={val.email}onChange={(event)=>{
                    setNewEmail(event.target.value);
                  }}
                  /> <input 
                  type="text" placeholder={val.pnumber}onChange={(event)=>{
                     setNewPnumber(event.target.value);
                   }}
                   /> <input 
                   type="text" placeholder={val.cost}onChange={(event)=>{
                      setNewCost(event.target.value);
                    }}
                    />
             
              <button type="button"
              class="btn btn-warning"
              
              onClick={()=>{editCar(val.id)}}>
                {" "}
                Update</button>
            </div>
{/*             
            <button onClick={()=>{editCarCost(val.id)}}>Edit</button> */}
            <button type="button"
            class="btn btn-danger" 
            
            onClick={()=>{deleteCar(val.id)}}>Delete</button>
            
          </div>
          );
          })}
      </div>
    </div>
  );
  }

export default App;

