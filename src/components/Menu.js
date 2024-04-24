import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import '../styleSheets/header/Icons.css';

export function Menu(){
    const[dropdown, setDropdown] =useState(false);

    const openCloseMenu = ()=>{
        setDropdown(!dropdown);
    }

    return(
        <Dropdown isOpen={dropdown} toggle={openCloseMenu}>
            <DropdownToggle caret className='MenuIcon'>
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Inicio</DropdownItem>
				<DropdownItem>Contacto</DropdownItem>
				<DropdownItem>Sobre Nosotros</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default Menu;