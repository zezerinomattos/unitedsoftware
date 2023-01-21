import React from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';

// IMAGES
import imgSobre from '../../assets/sobre.png';

export default function Home(){
    return(
        <>           
            <header className='container'>
                <Navbar />                
                <div className='header-inf-mestre'>
                    <div className='textos'>
                        <h1>UNITED SOFTWARE</h1>
                        <h2>Welcome to the Future!</h2>

                        <Link to="#" >FAÇA UM ORÇAMENTO SEM COMPROMISSO</Link>
                    </div>
                </div>
            </header>

            <section className='sobre'>
                <div className='sobre-imagem'>
                    <img src={imgSobre} alt="Imagem da página Sobre" />
                </div>
                <div className='sobre-textos'>
                    <h2>SOBRE</h2>
                    <span>Desenvolvimento de software sob medida para o seu negócio.</span>
                    <p>
                        A United Software surge com uma ideia de linkar sua loja, negócio e marca com o futuro, encaminhar seus passos a outro nível. United Software ou Softwares Unidos, para fazer com que nossos clientes consigam atingir seus resultados. <br/>

                        Trabalhamos em diversas frentes, construindo através da tecnologia um futuro para seu negócio e dando a visibilidade que ele precisa para se destacar no mundo digital.
                    </p>
                    <p>
                        O que você acha de sua marca brilhar no centro das atenções em um mundo cheio de marcas concorrentes para agarrar e prender a atenção das pessoas? Não é fácil, mas temos a solução certa para você, desenvolvemos projetos personalizados e responsivos, permitindo assim que seu negócio seja visto em qualquer dispositivo com a mesma beleza e performance.
                    </p>
                </div>
            </section>
        </>
    );
}