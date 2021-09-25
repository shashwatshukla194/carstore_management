import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(()=> {
        fetchItems();

    },[]);

    const [data,setData]= useState([]);
    





    const fetchItems = async()=>
    {
        
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const items = await data.json();

        console.log(items.data);
        setData(items.data);
      // setItems(items);
        
    }

  return (
    <div >
      {data.map(item =>(
          <h1 key ={item.itemid}>
            <Link to={`/shop/${item.itemid}`}>{item.item.name}</Link>
            --{item.item.description}-${item.store.cost}
              </h1>
          
          
      ))}
      
      
    </div>
  );
}


export default Shop;