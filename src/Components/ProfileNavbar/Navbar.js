import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, SideIcon, NavMenu, NavItems, NavLinks, NavBtnItem, NavBtnLink } from './Navbar.element';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../Styled-Global'

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


                      <NavItems><NavLinks>
                      <input type="email" style={{margin: "10px",padding: "20px",width: "100%",border: "2px solid #4B59F7",borderRadius: "20px"
                  }} placeholder="🔍 Search User By Email"/></NavLinks>

                      </NavItems>
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
                                <Button primary style={{background: "red"}}>Logout</Button>
                            </NavBtnLink>) 
                          :
                            (<NavBtnLink to="/sign-up">
                                <Button fontbig primary style={{background: "#b23b3b"}}>Logout</Button>
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
