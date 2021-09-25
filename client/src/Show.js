
import ReactDOM from 'react-dom';
import './App.css';
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import Axios from "axios";

function Show () {
  
    useEffect(()=> {
        fetchItems();

    },[]);

    const [data,setData]= useState([]);
    
  const [carList, setcarList] = useState([]);





    const fetchItems = async()=>
    {
        Axios.get("http://localhost:5000/carsel").then((response) => {
            console.log(response);
            setcarList(response.data);
          });
        };
      

  return (
    <div >

        <button type="button" className="btn btn-primary" onClick={fetchItems}> show all cars</button>
        {
        carList.map((val,key)=>
        {
          return (
          <div className="showcar">
            <div>
            <h3>{val.id}</h3>
            <h3>{val.name}</h3>
            <h3>{val.description}</h3>
            <h3>{val.rdate}</h3>
            <h3>{val.email}</h3>
            <h3>{val.pnumber}</h3>
            <h3>{val.cost}</h3>
            </div>
           </div>
          );
        }
    }
    </div>
    
    
        
      
     
      
      
    
  
  );
  }

export default Show;