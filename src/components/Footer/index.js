import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Link as Links, animateScroll as scroll } from "react-scroll";

import Aos from 'aos';
import 'aos/dist/aos.css';

// MY IMPORTS
import './style.css';

// MY IMAGE
import logo from '../../assets/HeaderLogo1.png';

export default function Footer(){

    const instagram = 'https://www.instagram.com/zezerino_mattos/';
    const facebook = 'https://www.facebook.com/profile.php?id=100081137054124';
    const whats = 'https://wa.me/5548991589625?text=Olá,%20eu%20gostaria%20de%20informações%20sobre...';

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <footer data-aos='fade-up'>
            <div className='img-logo'>
                <Links Links activeClass="active" to="container" spy={true} smooth={true} offset={-160} duration={500}><img src={logo} alt="Logotipo-futer" /></Links>
            </div>
            <nav className='container-inferior'>
                <ul className='menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Links activeClass="active" to="sobre" spy={true} smooth={true} offset={-50} duration={500}>Sobre</Links></li>
                    <li><Links activeClass="active" to="paginas" spy={true} smooth={true} offset={0} duration={500}>Oque Oferecemos</Links></li>
                    <li><Link to='/produtos'>Produtos</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>

                <ul className='redes-sociais'>
                    <li><a href={instagram} target='blank'><ion-icon name="logo-instagram"></ion-icon> Instagram</a></li>
                    <li><a href={facebook} target='blank'><ion-icon name="logo-facebook"></ion-icon> Facebook</a></li>
                    <li><a href={whats} target='blank'><ion-icon name="logo-whatsapp"></ion-icon> Whatsapp</a></li>
                </ul>

                <ul className='contato'>
                    <li><ion-icon name="call-outline"></ion-icon> 48 9 91589625</li>
                    <li><ion-icon name="mail-outline"></ion-icon> unitedsoftw@gmail.com</li>
                </ul>
            </nav>
            <span>Copyright © United Software. Todos diretos reservados.</span>
        </footer>
    );
}