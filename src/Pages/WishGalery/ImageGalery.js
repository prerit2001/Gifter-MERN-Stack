import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Card,Button} from  'react-bootstrap';
import axios from 'axios';
import{
    Galery,
    Item
} from './ImageGalery.element';

function ImageGallaryComponent(){

  //var idd = st.replace('/profile/', '');
 // console.log(match);
    const [wish,setwish] = useState([]);
      useEffect(()=>{
        const id = JSON.parse(localStorage.getItem('UserData')) 
        const data = {
          _id : id._id
        }
        console.log(id._id);
        axios.post('http://localhost:3001/api/myallpost',data)
        .then(result=>{
          console.log(result);
          setwish(result.data);
        })
      },[])
      return (
            <>  
                
                <h1 style={{cursor: "pointer",textAlign: "center",backgroundColor: "#4B59F7",color: "white",padding: "10px"}}><u>User's Wishlist</u></h1>
               {/* <Galery> */}
                   {
                     wish.map(item=>{
                       return(
                        
                          <div style={{border: "1px #cccccc solid", padding: "4px",width: "100%",textAlign: "center",background: "black" }}>
                            <Item src={item.Pic} style={{width: "80%",height:"500px",maxWidth: "700px"}}/>
                            <br/>
                            <div style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</div>
                          </div>  
                        
                       )
                     })
                   }
                 

            </>
        )
    
}

export default ImageGallaryComponent;