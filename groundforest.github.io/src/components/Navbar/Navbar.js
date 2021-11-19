import React, { forwardRef } from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavContainer, LogoImg, NavMenu, NavItem, NavLogo, MenuIcon, SmallScreenMenu} from './NavbarStyles'
import { data } from '../../data/NavbarData.js'
import { IconContext } from 'react-icons/lib'
import { useToggle } from '../../assets/useToggle'
import Logo from '../../Logo.png'

export const Navbar = forwardRef((props, ref) => {
    const[open, toggle] = useToggle(false)

    const { scrollTo } = props

    const onClickHandler = (page) => {
        scrollTo(page)
        if(open){
            toggle()
        }
    }

    return (
        <IconContext.Provider value={{ position: 'sticky' }}>
            <Nav ref={ref}>
                    <NavContainer>
                        <NavLogo>
                        <LogoImg src={Logo} alt="Logo"/>
                        </NavLogo>
                        <NavMenu>       
                            {data.map((el, idx) => (
                                <NavItem key={idx} onClick={() => onClickHandler(el.to)}>
                                    {el.text}
                                </NavItem>
                             ))}
                        </NavMenu>
                        {open ? <SmallScreenMenu>
                                    {data.map((el, idx) => (
                                        <NavItem key={idx} onClick={() => onClickHandler(el.to)}>
                                            {el.text}
                                        </NavItem>
                                    ))}
                                </SmallScreenMenu>
                        : ''}
                        <MenuIcon onClick={toggle}>
                            <FaBars/>
                        </MenuIcon>  
                    </NavContainer>
            </Nav>
            </IconContext.Provider>
    )
})
