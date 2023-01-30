import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Link as Links} from "react-scroll";

// MY IMPORTS
import './style.css';
import './responsive.css';

// MY IMAGE
import logo from '../../assets/HeaderLogo1.png';


export default function Navbar(){

    const [actived, setActived] = useState(false);
    const [option, setOption] = useState('home');

    function ativaMenuHamburguer(){
        setActived(!actived);
    }

    return(
        <nav className='container'>
            <div className='img-logo'>
                <Link to='/'><img src={logo} alt="Logotipo" /></Link>
            </div>

            <ul className={`menu-left ${actived ? 'active-menu' : 'not-active-menu'}`}>
                <li><Link to='/' className={option === 'home' ? 'optionActived' : null} onClick={() => setOption('home')}>Home</Link></li>
                
                <li><Links className={option === 'sobre' ? 'optionActived' : null} onClick={() => setOption('sobre')} activeClass="active" to="sobre" spy={true} smooth={true} offset={-150} duration={500} >Sobre</Links></li>
                <li><Links className={option === 'oque-oferecemos' ? 'optionActived' : null} onClick={() => setOption('oque-oferecemos')} activeClass="active" to="paginas" spy={true} smooth={true} offset={0} duration={500}>Oque Oferecemos</Links></li>
                
                <li><Link to='/produtos' className={option === 'produtos' ? 'optionActived' : null} onClick={() => setOption('produtos')}>Produtos</Link></li>
                <li><Link to='/contato' className={option === 'contato' ? 'optionActived' : null} onClick={() => setOption('contato')}>Contato</Link></li>
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

                   
                