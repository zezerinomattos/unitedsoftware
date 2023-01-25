import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

// MY IMPORTS
import './style.css';

// MY IMAGE
import logo from '../../assets/HeaderLogo1.png';

export default function Footer(){

    const urlYouTube = 'https://www.youtube.com/@vocenaoeoprimeiro';

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <footer data-aos='fade-up'>
            <div className='img-logo'>
                <Link to='/'><img src={logo} alt="Logotipo-futer" /></Link>
            </div>
            <nav className='container-inferior'>
                <ul className='menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='Sobre'>Sobre</Link></li>
                    <li><Link to='oqueoferecemos'>Oque Oferecemos</Link></li>
                    <li><Link to='produtos'>Produtos</Link></li>
                    <li><Link to='contato'>Contato</Link></li>
                </ul>

                <ul className='redes-sociais'>
                    <li><a href={urlYouTube} target='blank'><ion-icon name="logo-instagram"></ion-icon> Instagram</a></li>
                    <li><a href={urlYouTube} target='blank'><ion-icon name="logo-facebook"></ion-icon> Facebook</a></li>
                    <li><a href={urlYouTube} target='blank'><ion-icon name="logo-whatsapp"></ion-icon> Whatsapp</a></li>
                </ul>

                <ul className='contato'>
                    <li><ion-icon name="call-outline"></ion-icon> 48 9 91270827</li>
                    <li><ion-icon name="mail-outline"></ion-icon> mattoszz@hotmail.com</li>
                </ul>
            </nav>
            <span>Copyright © United Software. Todos diretos reservados.</span>
        </footer>
    );
}