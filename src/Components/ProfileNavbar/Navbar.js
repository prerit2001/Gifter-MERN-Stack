import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, SideIcon, NavMenu, NavItems, NavLinks, NavBtnItem, NavBtnLink,Followerbox } from './Navbar.element';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../Styled-Global'
import { Dropdown } from 'react-bootstrap';
import Axios from 'axios';
import Modal from 'react-modal';
import {FaWindowClose} from 'react-icons/fa';
import {RiUserFollowFill} from 'react-icons/ri'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '400px',
    width: '50%',
    position: 'fixed'
  }
};


const ProfileNavbar = () => {


    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const [modalIsOpen,setIsOpen] = React.useState(false);


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

    var subtitle;

    const handleclick = () => setClick(!click);

    const showButton = () => {
      if(window.innerWidth<1000){
        setButton(false);
      }
      else{
        setButton(true);
      }
    }

    const [detailfollower,setdetailFollowers] = useState([]);
    const [detailfollowing,setdetailFollowings] = useState([]);
    const [Following,setFollowing] = useState(true);
    
    useEffect(() => {
      Axios.post('https://node-backend-gifter.herokuapp.com/api/detailUserFollower',{_id : JSON.parse(localStorage.getItem('UserData'))._id})
            .then(result=>{
              console.log(result);
              setdetailFollowers(result.data);
      })
      Axios.post('https://node-backend-gifter.herokuapp.com/api/detailUserFollowing',{_id : JSON.parse(localStorage.getItem('UserData'))._id})
            .then(result=>{
              console.log(result);
              setdetailFollowings(result.data);
      })
      showButton();
    }, [])

    window.addEventListener('resize',showButton);


    const [mail,setmail] = useState([]);
    const [mailhint,setmailhint] = useState([]);

    function findmail(e){
   
      setmailhint(e.target.value);

      const data ={
        Mail : mailhint
      }

      Axios.post('https://node-backend-gifter.herokuapp.com/api/findmail',data)
      .then(result=>{
        console.log(result);
        setmail(result.data);
      })

    }

    console.log(window.location.href);
    var ss = (window.location.href);
    ss = ss.substr(ss.length-7);


    function follower(){
       setFollowing(false);
       setIsOpen(true);
    }
    
    function following(){
      setFollowing(true);
      setIsOpen(true);
   }

    return (
        <>
          <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
              
              <NavbarContainer> 
                 
                  <NavLogo to="/">
                      <NavIcon />
                      GIFTER　　
                  </NavLogo>
            
                  

                  <SideIcon onClick={handleclick}>
                    {click ? <FaTimes /> : <FaBars/>}
                  </SideIcon>

                  <NavMenu click={click}>

                      
                  <Dropdown  style={{color: "red"}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                       <NavItems style={{color: "red !important"}}>
                        <NavLinks>
                      <input type="email" style={{margin: "10px",padding: "20px",width: "100%",border: "2px solid #4B59F7",borderRadius: "20px"
                       }} placeholder="🔍 Search User By Email" onChange={findmail}/>
                       </NavLinks>
                      </NavItems>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {
                      
                        mail.map(item => {
                          if(ss==='profile')
                          return ( <>
                         
                          <Dropdown.Item style={{margin: "10px",color: "white",background: "#4B59F7",borderRadius: "20%"}} href={"profile/"+item._id}>{item.Email}</Dropdown.Item>
                          <br />
                          </>
                          )
                          else
                          return ( <>
                         
                         <Dropdown.Item style={{margin: "10px",color: "white",background: "#4B59F7",borderRadius: "20%"}} href={item._id}>{item.Email}</Dropdown.Item>
                         <br />
                         </>
                         )
                          
                        })
                      }
                      {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>
                     

                      <NavItems style={{marginLeft: "10px"}} onClick={handleclick}>
                        <NavLinks to='/profile'> <b>My Profile</b> </NavLinks>
                      </NavItems>
            
                      <NavItems onClick={handleclick}>
                        <NavLinks to='/createWish'> <b>My Wishlist</b> </NavLinks>
                      </NavItems>

                      <NavItems onClick={handleclick}>
                        <NavLinks onClick={follower}> <b>My Followers</b> </NavLinks>
                      </NavItems>

                      <NavItems onClick={handleclick}>
                        <NavLinks onClick={following}> <b>My Following</b> </NavLinks>
                      </NavItems>

                      <NavBtnItem onClick={handleclick}>
                        {
                          button ? 
                            (<NavBtnLink to="/sign-up">
                                <Button primary style={{background: "red"}} onClick={e=>localStorage.removeItem("UserData")}>Logout</Button>
                            </NavBtnLink>) 
                          :
                            (<NavBtnLink to="/sign-up">
                                <Button onClick={e=>localStorage.removeItem("UserData")} fontbig primary style={{background: "#b23b3b"}}>Logout</Button>
                            </NavBtnLink>)
                        }
                      </NavBtnItem>
                  </NavMenu>

              </NavbarContainer>

            </Nav>
          </IconContext.Provider>

                        
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
       
         <h2 ref={_subtitle => (subtitle = _subtitle)} > </h2>
         <div style={{right:0,top:0,margin: "20px",position:"fixed"}}><FaWindowClose onClick={closeModal} /></div>
         <br/>
        { !Following && <> <h2 style={{border: "2px solid black",textAlign: 'center'}}> <b><RiUserFollowFill/> My Followers <RiUserFollowFill/></b></h2>
          

          <Followerbox>
          <hr/>
          {
                    
                    detailfollower.map(item => {
                      return (
                        <a href={"/profile/"+item._id}>
                        <div className="container" >
                          <img src={item.pofilePicture} alt="Avatar" style={{width: "100%",height: "60px",maxWidth: "50px"}}  />
                          <p style={{marginTop: "10px"}}>{item.Name}</p>
                        </div>
                        <hr/>
                        </a>
                      )
                    })
          }
          </Followerbox></>

        }
        { Following && <> <h2 style={{border: "2px solid black",textAlign: 'center'}}> <b><RiUserFollowFill/> My Followers <RiUserFollowFill/></b></h2>
          

          <Followerbox>
          <hr/>
          {
                    
                    detailfollowing.map(item => {
                      return (
                        <a href={"/profile/"+item._id}>
                        <div className="container" >
                          <img src={item.pofilePicture} alt="Avatar" style={{width: "100%",height: "60px",maxWidth: "50px"}}  />
                          <p style={{marginTop: "10px"}}>{item.Name}</p>
                        </div>
                        <hr/>
                        </a>
                      )
                    })
          }
          </Followerbox></>

        }
        
         
        
         


         

        </Modal>
        </>
    )
}

export default ProfileNavbar;
