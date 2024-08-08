import React, { useState } from 'react'
import logo from './logo.png'
import { HashLink } from 'react-router-hash-link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';

function Header() {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click);
        document.getElementById('close-btn').checked = true
    }
    // const notify = () => toast.info("Registrations opening soon!", {
    //     position: "bottom-right",
    //     autoClose: 3000,
    //     style: {
    //         backgroundColor: "#08b2aa"
    //     }
    // });
    // const [color, setColor] = useState(false);
    // const changeColor = () => {
    //     if (window.scrollY >= 100) {
    //         setColor(true);
    //     } else {
    //         setColor(false);
    //     }
    // };

    // window.addEventListener("scroll", changeColor);

    return (
        <nav>
            <div class="wrapper">
                <div class="logo">
                    <HashLink to='/#hero' style={{ textDecoration: 'none' }}>
                        <img src={logo} height="230" alt="logo" />
                    </HashLink>
                </div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul class="nav-links pt-3">
                    <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                    <HashLink to='/#hero' style={{ textDecoration: 'none' }}>
                        <li className=' text-white ' onClick={handleClick}>
                            <a className='hoverBot'>Home</a>
                        </li>
                    </HashLink>
                    <HashLink to='/#aboutus' style={{ textDecoration: 'none'}}>
                        <li className=' text-white' onClick={handleClick}>
                            <a className='hoverBot'>About</a>
                        </li>
                    </HashLink>
                    <HashLink to='/#problems' style={{ textDecoration: 'none' }} onClick={handleClick}>
                        <li className=' text-white'>
                            <a className='hoverBot'>Problems</a>
                        </li>
                    </HashLink>
                    <HashLink to='/#prizes' style={{ textDecoration: 'none' }} onClick={handleClick}>
                        <li className='text-white'>
                            <a className='hoverBot'>Prizes</a>
                        </li>
                    </HashLink>
                    <HashLink to='/#sponsors' style={{ textDecoration: 'none' }} onClick={handleClick}>
                        <li className='text-white'>
                            <a className='hoverBot'>Sponsors</a>
                        </li>
                    </HashLink>
                    <HashLink to='/#timeline' style={{ textDecoration: 'none' }} onClick={handleClick}>
                        <li className='text-white'>
                            <a className='hoverBot'>Timeline</a>
                        </li>
                    </HashLink>
                    <li>
                        <a class="desktop-item hoverBot mx-2">More<ArrowDropDownIcon /></a>
                        <input type="checkbox" id="showDrop" />
                        <label for="showDrop" class="mobile-item">More</label>
                        <ul class="drop-menu">
                            <li className='text-white'>
                                <HashLink className='moreLinks' to='/#guidelines'>Guidelines</HashLink>
                            </li>
                            <li className='text-white'>
                                <HashLink className='moreLinks' to='/#gallery'>Gallery</HashLink>
                            </li>
                            <li className='text-white'>
                                <HashLink className='moreLinks' to='/#faq'>FAQ</HashLink>
                            </li>
                            <li className='text-white mb-3'>
                                <HashLink className='moreLinks' to='/#contact'>Contact</HashLink>
                            </li>
                        </ul>
                    </li>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                        <li className=' text-white  '>
                            <a className=' register-btn-navbar moreLinks'>Register</a>
                        </li>
                    </Link>
                </ul>
                <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
            </div>
        </nav>
    )
}

export default Header