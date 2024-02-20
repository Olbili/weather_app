import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem'
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
    
  return (
    
    <header>
        <a href="" className="logo"><img src="./img/logo.svg" alt="logo"/></a>
        <div className="menu">
        <Dropdown>
  <MenuButton>Menu
  <IoIosArrowDown />
  </MenuButton>
  <Menu slots={{ listbox: "ul"}}>
    <MenuItem >Who we are</MenuItem>
    <MenuItem >
      Contacts
    </MenuItem>
    <MenuItem >Menu</MenuItem>
    <MenuItem ><img/></MenuItem>
    <MenuItem ><button>Sign up</button></MenuItem>
  </Menu>
</Dropdown>
        </div>
    </header>
  )
}

export default Header

// border:none;
// outline:none;
// background-color:tramnsparent;