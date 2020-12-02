import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, SideIcon, NavMenu, NavItems, NavLinks, NavBtnItem, NavBtnLink } from './Navbar.element';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../Styled-Global'
import { Dropdown } from 'react-bootstrap';
import Axios from 'axios';
import {Link} from 'react-router-dom';

const ProfileNavbar = () => {

    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleclick = () => setClick(!click);

    const showButton = () => {
      if(window.innerWidth<960){
        setButton(false);
      }
      else{
        setButton(true);
      }
    }
    
    useEffect(() => {
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

      Axios.post('http://localhost:3001/api/findmail',data)
      .then(result=>{
        console.log(result);
        setmail(result.data);
      })

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

                  <NavMenu onClick={handleclick} click={click}>

                      
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                       <NavItems >
                        <NavLinks>
                      <input type="email" style={{margin: "10px",padding: "20px",width: "100%",border: "2px solid #4B59F7",borderRadius: "20px"
                       }} placeholder="🔍 Search User By Email" onChange={findmail}/>
                       </NavLinks>
                      </NavItems>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {
                      
                        mail.map(item => {
                          return ( <>
                         
                          <Dropdown.Item style={{color: "white",background: "black"}} href={"http://localhost:3000/profile/"+item._id}>{item.Email}</Dropdown.Item>
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
                     

                      <NavItems style={{marginLeft: "10px"}}>
                        <NavLinks to='/profile'> <b>Profile</b> </NavLinks>
                      </NavItems>
            
                      <NavItems>
                        <NavLinks to='/createWish'> <b>Wishlist</b> </NavLinks>
                      </NavItems>

                      <NavItems>
                        <NavLinks to='/followers'> <b>Followers</b> </NavLinks>
                      </NavItems>

                      <NavItems>
                        <NavLinks to='/following'> <b>Following</b> </NavLinks>
                      </NavItems>

                      <NavBtnItem>
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
        </>
    )
}

export default ProfileNavbar
