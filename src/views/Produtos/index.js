import React from 'react';


// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';

// Images
import imgCapaHeader from '../../assets/headerProdutos.png';

export default function Produtos(){
    return(
        <header>
            <Navbar />
            <div className='header-container'>
                <div className='imagem'>
                    <img src={imgCapaHeader} alt="Imagem de Capa" />
                </div>
                <div className='textos'>
                    <h1>PORQUE INVESTIR <br /> EM UM LAYOUT <br /> PERSONALIZADO?</h1>

                    <p>
                        Um layout profissional aumenta a credibilidade do seu projeto, trazendo <br /> engajamento e lucro.
                    </p>
                    <p>
                        Nossos cérebros conseguem decidir muito rapidamente se gostaram de um <br/> produto ou website e isso direciona-os na sua tomada de decisão, ou seja, se <br/> forem positivos, os próximos julgamentos tendem a ser positivos.
                    </p>
                </div>
            </div>
        </header>
    );
}