import React /*, {useState, useEffect}*/ from 'react';
import { FaBars } from 'react-icons/fa'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink, Cart} from "./navbar.styles"
import image from './crown.svg'
import { withRouter } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { animateScroll as scroll } from 'react-scroll';
import MyVerticallyCenteredModal from '../subServiceModal/subServiceModel.component'
import CartModal from '../cart-modal/cart-modal.component';
import AccountDropDown from '../account-dropdown/account-dropdown.components';


const Navbar = ( {toggle,history} ) => {
    const [modalShow, setModalShow] = React.useState(false);

    // const [scrollNav, setscrollNav] = useState(false)

    // const changeNav = () => {
    //     if(window.scrollY >= 80){
    //         setscrollNav(true)
    //     }
    //     else{
    //         setscrollNav(false)

    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll',changeNav)
    // }, []);
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    const toggleSignIn = () =>{
        scroll.scrollToTop();
    }



    return (   
        <>  
            <Nav /*scrollNav={scrollNav}*/>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><img src={image} alt='logo' style={{height:"40px"}} /></NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='services'
                            smooth={true}
                            duration={600}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='about'
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='faq'
                            smooth={true}
                            duration={800}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='contact'
                            smooth={true}
                            duration={900}
                            spy={true}
                            exact='true'
                            offset={-55}
                            >Contact</NavLinks>
                        </NavItem>
                        <AccountDropDown />
                        {/* <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin' onClick={toggleSignIn}>Sign In</NavBtnLink>
                        <Cart >
                    <ShoppingCartOutlinedIcon 
                    onClick={() => setModalShow(true)}
                    />
                    <CartModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
      /></Cart>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default withRouter(Navbar);
