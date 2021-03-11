import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink} from "./navbar.styles"
import image from './crown.svg'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ( {toggle} ) => {

    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setscrollNav(true)
        }
        else{
            setscrollNav(false)

        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    // const scrollToServices = () => {
    //     window.scrollTo({
    //         top: 770,
    //         left: 0,
    //         behavior: 'smooth'
    //       });
    // }

    // const scrollToAbout = () => {
    //     window.scrollTo({
    //         top: 1950,
    //         left: 0,
    //         behavior: 'smooth'
    //       });
    // }

    // const scrollToFaq = () => {
    //     window.scrollTo({
    //         top: 3900,
    //         left: 0,
    //         behavior: 'smooth'
    //       });
    // }

    // const scrollToContact = () => {
    //     window.scrollTo({
    //         top: 4900,
    //         left: 0,
    //         behavior: 'smooth'
    //       });
    // }


    return (   
        <>  
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><img src={image} alt='logo' style={{height:"40px"}} /></NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'
                            // smooth={true}
                            // duration={500}
                            // spy={true}
                            // exact='true'
                            // offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'
                            // onClick={scrollToServices}
                            // smooth={true}
                            // duration={500}
                            // spy={true}
                            // exact='true'
                            // offset={-65}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'
                            // onClick={scrollToAbout}
                            // smooth={true}
                            // duration={500}
                            // spy={true}
                            // exact='true'
                            // offset={-65}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'
                            // onClick={scrollToFaq}
                            // smooth={true}
                            // duration={500}
                            // spy={true}
                            // exact='true'
                            // offset={-65}
                            >FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'
                            // onClick={scrollToContact}
                            // smooth={true}
                            // duration={500}
                            // spy={true}
                            // exact='true'
                            // offset={-55}
                            >Contact</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
