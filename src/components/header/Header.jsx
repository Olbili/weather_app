import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem'
import { IoIosArrowDown } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

import s from './header.module.css';


const Header = ({setModalIsOpen}) => {
  return (
    <header className={s.header}>
      <a href="" className="logo"><img src="img/logo.svg" alt="logo" /></a>
      <div className={s.hiddenMenu}>
          <ul className={s.hiddenMenuUl}>
            <li><a href=''>Who we are</a></li>
            <li><a href="">Contacts</a></li>
            <li><a href="">Menu</a></li>
            <li><RxAvatar/></li>
            <li><button>Sign up</button></li>
          </ul>
        </div>
      <div>
        <Dropdown className={s.dropDown}>
          <MenuButton className={s.menuButton}>Menu
            <IoIosArrowDown />
          </MenuButton>
          <Menu className={s.menu} slots={{ listbox: "ul"}}>
            <div className={s.mainInformation}>
              <MenuItem ><a href=''>Who we are</a></MenuItem>
              <MenuItem ><a href="">Contacts</a></MenuItem>
              <MenuItem ><a href="">Menu</a></MenuItem>
            </div>
            <div className={s.profile}>
            <MenuItem ><RxAvatar/></MenuItem>
            <MenuItem ><button onClick={() => setModalIsOpen(true)}>Sign up</button></MenuItem>
            </div>
          </Menu>
        </Dropdown>
       
      </div>
    </header>
    )
  }

export default Header

