import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/mypage" activeStyle>
            My Page
          </NavLink>
          <NavLink to="/friends" activeStyle>
            Friends
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/settings" activeStyle>
            Settings
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;