import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import logo from '../../assets/logo.svg';


const Menu  = () => {
    return ( 
<><p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p></>
     );
}
 



function Navbar() {
    const [toggleMenu, setToggelMenu] = useState(false);

    return (

        <div className="navbar">
            <div className="links">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <div className="links-container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <p>Sign in </p>
                <button type='button'> Sign up </button>
            </div>
            <div className="menu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggelMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggelMenu(true)} />}
                {toggleMenu && <div className='menu-container scale-up-center'>
                    <div className="menu-container-links">
                        <Menu />
                        <div className="menu-container-links-sign">
                        <p>Sign in </p>
                        <button type='button'> Sign up </button>
            </div>
                    </div>

                </div>}

            </div>
        </div>

    );
}
 
export default Navbar; 


