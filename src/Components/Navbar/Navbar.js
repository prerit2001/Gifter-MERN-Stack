import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  SideIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtnItem,
  NavBtnLink,
} from "./Navbar.element";
import { IconContext } from "react-icons/lib";
import { Button } from "../../Styled-Global";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleclick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth < 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              GIFTER
            </NavLogo>

            <SideIcon onClick={handleclick}>
              {click ? <FaTimes /> : <FaBars />}
            </SideIcon>

            <NavMenu onClick={handleclick} click={click}>
              <NavItems>
                <NavLinks to="/"> Home </NavLinks>
              </NavItems>

              <NavItems>
                <NavLinks to="/services"> Services </NavLinks>
              </NavItems>

              <NavItems>
                <NavLinks to="/products"> Products </NavLinks>
              </NavItems>

              <NavItems>
                <NavLinks to="/about"> About </NavLinks>
              </NavItems>

              <NavBtnItem>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>Sign In</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontbig primary>
                      Sign In
                    </Button>
                  </NavBtnLink>
                )}
              </NavBtnItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
