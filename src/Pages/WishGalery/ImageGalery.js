import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Modal from 'react-modal';
import {FaWindowClose} from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';


import{

    Item
} from './ImageGalery.element';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

function ImageGallaryComponent(){



 // item.Pic,item.Title,item.Subject,item.Priority,item.Category
  const [Picc,setPicc] = useState('')
  const [Titlee,setTitlee] = useState('')
  const [Subjectt,setSubjectt] = useState('')
  const [Priorityy,setPriorityy] = useState('')
  const [Headingg,setHeadingg] = useState('')
  

  //var idd = st.replace('/profile/', '');
 // console.log(match);
    const [wish,setwish] = useState([]);
      useEffect(()=>{
        const id = JSON.parse(localStorage.getItem('UserData')) 
        const data = {
          _id : id._id
        }
        console.log(id._id);
        axios.post('https://node-backend-gifter.herokuapp.com/api/myallpost',data)
        .then(result=>{
          console.log(result);
          setwish(result.data);
        })
      },[])

     

      const [modalIsOpen,setIsOpen] = React.useState(false);
      var subtitle;

      function openModal() {
        setIsOpen(true);
        
      }
     
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
     
      function closeModal(){
        setIsOpen(false);
      }

      function something(p1,p2,p3,p4,p5){
        setTitlee(p1.toString());
        setHeadingg(p2.toString());
        setPicc(p3.toString());
        setSubjectt(p4.toString());
        setPriorityy(p5.toString());
        setIsOpen(true);
      }


      function deletewish(){
        toast.info('Please Wait Till Server Wakes',{position: toast.POSITION.TOP_CENTER});
        const data = {
          Pic : Picc,
          Title: Titlee,
          Heading: Headingg,
          Subject: Subjectt,
          Priority: Priorityy
        }
        axios.post('https://node-backend-gifter.herokuapp.com/api/deletewish',data)
        .then(result=>{
          console.log(result);
          toast.success('Successfully deleted the item',{position: toast.POSITION.TOP_CENTER});
          window.location.reload(false);
        }).catch(error=>{
          toast.error('Sorry, Server not reachable!!',{position: toast.POSITION.TOP_CENTER});
        })
      }
      

      return (
            <>  
                
                <h1 style={{cursor: "pointer",textAlign: "center",backgroundColor: "#4B59F7",color: "white",padding: "10px"}}><u>User's Wishlist</u></h1>
               {/* <Galery> */}
                   {
                     wish.sort((a, b) => a.Priority> b.Priority ? 1 : -1).slice(0,10).map(item=>{
                       return(
                        <>
                          <div onClick={()=>something(item.Title,item.Heading,item.Pic,item.Subject,item.Priority)} style={{border: "1px #cccccc solid", padding: "4px",width: "100%",textAlign: "center",background: "black" }}>
                            <Item src={item.Pic} style={{width: "80%",height:"500px",maxWidth: "700px"}}/>
                            <br/>
                            <div style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</div>
                                 </div>
                       
                          </>   
                       )
                     })
                   }


          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
       
         <h2 ref={_subtitle => (subtitle = _subtitle)} > </h2>
         <div style={{right:0,top:0,margin: "30px",position:"fixed"}}><FaWindowClose onClick={closeModal} /></div><br/>
         
         <h4 class="card-title" style={{textAlign: "center",fontSize: "20px",}}>Wish Priority: {Priorityy}</h4>         
          <div class="card" style={{width:"400px",border: "1px solid",textAlign: "center"}}>
            <img class="card-img-top" src={Picc} alt="Card image" style={{width: "80%",height:"300px",maxWidth: "600px"}} />
            <div class="card-body">
              <h4 class="card-title" style={{textAlign: "center",fontSize: "20px",}}>{Titlee}</h4>
              <h5 class="card-title" style={{textAlign: "center",fontSize: "10px",}}>₹ {Headingg} /-</h5>
              <p class="card-text" style={{textAlign: "center"}}>{Subjectt}</p>
              <h4 onClick={deletewish} style={{textAlign: "center",background: "red",font: "15px",cursor: 'pointer'}}>Delete</h4>
            </div>
          </div>
                  


         

        </Modal>  
            
                    
     
                 

            </>
        )
    
}

export default ImageGallaryComponent;