import React from 'react';

// MY IMPORTS
import './style.css';
import './responsive.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function EstratégiasMarketing(){
    return(
        <>
            <header className='marketing'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='header-container'>
                    <div className='chamada'>
                        <h1>Estratégias de Marketing para Instagram</h1>
                        <h2>Aprenda com profissionais experientes e aumente suas vendas agora!</h2>

                        <a href="#">QUERO COMPRAR AGORA</a>
                    </div>
                </div>
            </header>
            <main></main>
            <Footer />
        </>
    );
}