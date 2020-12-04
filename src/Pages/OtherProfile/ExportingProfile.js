
import React from 'react';
import {useEffect,useState} from 'react';
import {AiFillWechat} from 'react-icons/ai';
import {RiUserFollowFill} from 'react-icons/ri';

import ProfileNavbar from '../../Components/ProfileNavbar/Navbar'
import Axios from 'axios';
import { toast } from 'react-toastify';
import {
    Full,
    SemiFull,
    FullPage,
    ProfileImg,
    NameDisplay,
    FollowBox,
    Following,
    Followers,
    Wishes,

    Moto,

    ChatLeft,
    MainScreen,
    Something,
    ChatRight
} from '../Profile/Profile.element';

import '../Profile/Profile.css';


import { Button } from '../../Styled-Global';

export function ExportingProfile({match}) {
 var str = match.url;
 var id = str.replace('/profile/', '');
 const [followers,setfollowers] = useState(0);
 const [followings,setfollowings] = useState(0);
//  const [wishno,setwishno] = useState(0);
 const [button,setButton] = useState(true);
 const [Name,setName] = useState('');
 const [Age,setAge] = useState('');
 const [Bio,setBio] = useState('');
 const [wish,setwishh] = useState([]);
 const [picc,setpicc] = useState('');
 const showButton = () => {
    if(window.innerWidth<960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  }

  const [follow,setfollow] = useState(true);
  
  const [datailFollowers,setdetailFollowes] = useState([]);
  const [allmessage,setallmessage] = useState([]);

 useEffect(() => {
    const address = 'https://node-backend-gifter.herokuapp.com/api/user/'+id;
    Axios.get(address)
    .then(result=>{
        console.log(result);
        setName(result.data.user.Name);
        setBio(result.data.user.Moto);
        setAge(result.data.user.Age);
        setpicc(result.data.user.pofilePicture);
        // console.log(this.state.Name);
        // this.context.ok = true;
    })
    .catch(error=>{
        console.log(error);
    })

    const data = {
      _id : id
    }
    Axios.post('https://node-backend-gifter.herokuapp.com/api/myallpost',data)
        .then(result=>{
          console.log(result);
          setwishh(result.data);
        })

    const dataa = {
      To : id,
      From : JSON.parse(localStorage.getItem('UserData'))._id
    }
    Axios.post('https://node-backend-gifter.herokuapp.com/api/checkfollow',dataa)
    .then(result=>{
      console.log(result);
      if(result.data>0)setfollow(false);
      else setfollow(true);
      console.log(result.data);
    }).catch(error=>{
      console.log(error);
    })
    
    Axios.post('https://node-backend-gifter.herokuapp.com/api/userfollower',{id : id})
    .then(result=>{
      console.log(result);
      setfollowers(result.data);
      console.log(result.data);
    }).catch(error=>{
      console.log(error);
    })

    Axios.post('https://node-backend-gifter.herokuapp.com/api/userfollowing',{id : id})
    .then(result=>{
      console.log(result);
      setfollowings(result.data);
      console.log(result.data);
    }).catch(error=>{
      console.log(error);
    })

    Axios.post('https://node-backend-gifter.herokuapp.com/api/detailUserFollower',{_id : id})
    .then(result=>{
      console.log(result);
      setdetailFollowes(result.data);
    })


    Axios.post('https://node-backend-gifter.herokuapp.com/api/findallmessages',{id : id})
    .then(result=>{
      console.log(result.data);
      setallmessage(result.data);
      
    }).catch(error=>{
      console.log(error);
    })
     

    showButton();
 }, [])

 
  window.addEventListener('resize',showButton);

 function Follow(){
    const data = {
      To : id,
      From : JSON.parse(localStorage.getItem('UserData'))._id
    }
    Axios.post('https://node-backend-gifter.herokuapp.com/api/follow',data)
    .then(result=>{
      console.log(result);
      setfollow(false);
    })
 }
 function unFollow(){
    const data = {
      To : id,
      From : JSON.parse(localStorage.getItem('UserData'))._id
    }
    Axios.post('https://node-backend-gifter.herokuapp.com/api/unfollow',data)
    .then(result=>{
      console.log(result);
      setfollow(true);
    })
 }
 const [message,setmessage] = useState('');

 function SendMessage(){

   if(message.length<1 || message.length>=30){
     toast.error('Message Coloumn Error : Should be greater than 0 and less than 30 Characters',{position: toast.POSITION.TOP_CENTER});
     return;
   }

   window.location.hash = true;

    const data = {
      message: message,
      To : id,
      From :  JSON.parse(localStorage.getItem('UserData'))._id,
    }

    Axios.post('https://node-backend-gifter.herokuapp.com/api/sendmessage',data)
    .then(result=>{
      console.log(result);
      
      window.location.reload(false);
   
    })
     .catch(error=>{
       console.log(error);
     })
 }


 return <>
      <ProfileNavbar />
            <Something>
            <ChatLeft>
              {button && <> 
                
                <h2 className="H22"> <AiFillWechat/> <br/> Recent Annonymous Chat Messages <br/> 💬 </h2>

                  <form class="form" >
                        <div class="animate__animated animate__fadeInLeft">
                            <input id="candidate" type="text" class="form__field" placeholder="Message Here(30 Words)" onChange={e=>setmessage(e.target.value)} pattern=".{1,30}" required/>
                            <button id="btn2" type="button" class="btn btn--primary btn--inside uppercase" onClick={SendMessage}>Send</button>
                        </div>
                    </form>
                    <br/>
                    {
                      allmessage.slice(0,50).map(item=>{
                        if(item.To!==item.From)
                        return (
                          
                          <div className="container">
                          <img style={{width: "100%",height: "60px",maxWidth: "50px"}} src="data:image/jpeg;base64,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" alt="Avatar" style={{width: "100%"}}  />
                          <p style={{padding: "10px"}}>{item.message}</p>
                          </div>
                        )
                        else return(
                          <div className="container darker">
                          <img src={picc} alt="Avatar" className="right" style={{width: "100%",height: "60px",maxWidth: "50px"}} />
                          <p  style={{padding: "10px"}}>{item.message}</p>
                          </div>
                        )
                      })
                    }

                    {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
                </>
              }
            </ChatLeft>
            <ChatRight>
              {button && <> 
                
                <h2 className="H22"> <RiUserFollowFill/> <br/> User's Follower <br/> 😊💬😊 </h2>

                    
                    <br/>
                   

                    {
                    datailFollowers.map(item => {
                      return (
                        <a href={"/profile/"+item._id}>
                        <div className="container container2" >
                          <img src={item.pofilePicture} alt="Avatar" style={{width: "100%",height: "60px",maxWidth: "50px"}}  />
                          <p style={{marginTop: "10px"}}>{item.Name}</p>
                        </div>
                        </a>
                      )
                    })
              }
 

                    

                   

                    {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
                </>
              }
            </ChatRight>
            <MainScreen>
            <FullPage>
                 <Full>
                    
                     
                     <h1 className="H23" style={{cursor: "pointer"}}><u>User Profile</u></h1>
                     <SemiFull>
                   
                
                <ProfileImg src={picc}/>

                        { id !== JSON.parse(localStorage.getItem('UserData'))._id && 
                        <> <br/>
                          {follow && <> <Button onClick={Follow} style={{background:"red"}}><b>+ FOLLOW +</b></Button> </> }
                          {!follow && <> <Button onClick={unFollow} style={{background:"red"}}><b>- UNFOLLOW -</b></Button> </> }
                          </>
                        }
                          
                        <br/>
                        <NameDisplay>{Name}</NameDisplay><br/>
                        <Moto>Bio : {Bio}</Moto>
                        <Moto>Age : {Age}</Moto>
                        <FollowBox>
                            <Followers>{followers} <br/> Follower</Followers>
                            <Wishes>{wish.length} <br/> Wishes</Wishes>
                            <Following>{followings} <br/> Following</Following>
                           

                          
                        </FollowBox>
                    </SemiFull>
                    <hr/>
                    {/* {
                      <>
                      

                      <PostWish />

                      </>
                    
                    }
                    
                    <hr/> */}
                   
                    
                    <h1 style={{cursor: "pointer",textAlign: "center",backgroundColor: "#4B59F7",color: "white",padding: "10px"}}><u>User's Wishlist</u></h1>
               {/* <Galery> */}
                   {
                     wish.sort((a, b) => a.Priority> b.Priority ? 1 : -1).slice(0,20).map(item=>{
                       return(
                        
                          <div style={{border: "1px #cccccc solid", padding: "4px",width: "100%",textAlign: "center",background: "black" }}>
                            <img alt="ss" src={item.Pic} style={{width: "80%",height:"500px",maxWidth: "700px"}}/>
                            <br/>
                            <div style={{padding: "2px", textAlign: "center",color: "white",margin: "10px"}}>Hii</div>
                          </div>  
                        
                       )
                     })
                   }
                   
                </Full>
            </FullPage>
            
               
            </MainScreen>
            </Something>

            <h1 className="H23" style={{cursor: "pointer",color: "white"}}>.</h1>
 </>
}