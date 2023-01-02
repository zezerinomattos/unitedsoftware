import React from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';

// IMAGES
import imgZeze from '../../assets/HeaderZezerino.png'

export default function Home(){
    return(
        <header className='container'>
            <Navbar />
            <div className='header-inf-mestre'>
                <div className='textos'>
                    <h1>UNITED SOFTWARE</h1>
                    <h2>Welcome to the Future!</h2>

                    <Link to="#" >FAÇA UM ORÇAMENTO SEM COMPROMISSO</Link>
                </div>
                
                <div className='img-ze'>
                    {/* <img src={imgZeze} alt="Imagem" /> */}
                </div>
            </div>
        </header>
    );
}