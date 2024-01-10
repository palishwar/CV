import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <div className="contain sticky-top text-center">
                <div className="image">
                    <img src="/images/IMG.JPG" />
                </div>
                <h1 className='text-white text-center'>Ishwar Pal</h1>
                <div className="icon">
                    <ul class="nav justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.facebook.com/profile.php?id=100076353587376" target="blank"><FaFacebook className="icon facebook" /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://api.whatsapp.com/send/?phone=9779842205549" target="blank"> <FaWhatsapp className="icon whatsapp" /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/in/ishwar-pal-a62b4b202/" target="blank"><FaLinkedin /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mailto:palishwar99@gmail.com?subject=Regarding CV" ><FaMailBulk /></a>
                        </li>
                    </ul>
                </div>
                <nav className="navbar navbar-expand-md ">
                    <div className="box-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul class="nav">
                                
                                <li class="nav-item ">
                                    <Link class="nav-link active" aria-current="page" to="/"><IoHomeSharp /> Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about"><MdManageAccounts /> About/ Contacts</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/resume"><MdOutlineContactPage /> Resume</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/travel"><RiPagesFill /> Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                </nav>
            </div>
        </>
    )
}

export default Header