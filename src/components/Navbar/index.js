import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsivo.css';

// MY IMAGE
import logo from '../../assets/HeaderLogo.png';


export default function Navbar(){

    const [actived, setActived] = useState(false);

    function ativaMenuHamburguer(){
        setActived(!actived);
    }

    return(
        <nav className='container'>
            <div className='img-logo'>
                <Link to='/'><img src={logo} alt="Logotipo" /></Link>
            </div>

            <ul className={`menu-left ${actived ? 'active-menu' : 'not-active-menu'}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='Sobre'>Sobre</Link></li>
                <li><Link to='oqueoferecemos'>Oque Oferecemos</Link></li>
                <li><Link to='produtos'>Produtos</Link></li>
                <li><Link to='contato'>Contato</Link></li>
            </ul>

            <ul className='menu-humburguer'>
                {
                    actived ? <li onClick={ativaMenuHamburguer} ><ion-icon name="close-outline"></ion-icon></li>
                    : <li onClick={ativaMenuHamburguer} ><ion-icon name="menu-outline"></ion-icon></li>
                }
            </ul>
        </nav>
    );
}