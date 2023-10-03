import React from 'react';

// MY IMPORTS
import './style.css';
import './responsive.css';

const LayoutProdutosEcomerce = ((props) => {
    return(
        <div className='container'>
            <div className='imagem-layout'>
                <img src={props.img} alt="" />
            </div>

            <div className='text'>
                <h1>E-commerce</h1>
                <span>Comece a vender online, crie sua loja virtual e saia na frente do seu concorrente.</span>
                <p>
                    Realize vendas de forma automatizada com sua Loja Online. Sistemas de E-commerce completos e mordernos, vamos desenvolver o layout conforme as necessidades da sua empresa, público alvo e baseado na sua linha de produtos.
                </p>
            </div>
        </div>
    );
});


const LayoutProdutosWebsite = ((props) => {
    return(
        <div className='container'>
            <div className='imagem-layout'>
                <img src={props.img} alt="" />
            </div>

            <div className='text'>
                <h1>Sites Institucionais</h1>
                <span>Seguimos rigorosos padrões de desenvolvimento para alcançarmos o melhor resultado.</span>
                <p>
                    Sites para empresas e negócios. Modernize sua empresa com um site institucional, adaptável a todo meio de acesso, com isso acessível via Celulares, Tablets e Computadores. <br/>
                    Colocamos o site de sua empresa no Google e em todas as plataformas de pesquisas fazendo com que apareça para todo Brasil.
                </p>
            </div>
        </div>
    );
});

const LayoutProdutosSistema = ((props) => {
    return(
        <div className='container'>
            <div className='imagem-layout'>
                <img src={props.img} alt="" />
            </div>

            <div className='text'>
                <h1>Sites Institucionais</h1>
                <span>Seguimos rigorosos padrões de desenvolvimento para alcançarmos o melhor resultado.</span>
                <p>
                    Sites para empresas e negócios. Modernize sua empresa com um site institucional, adaptável a todo meio de acesso, com isso acessível via Celulares, Tablets e Computadores. <br/>
                    Colocamos o site de sua empresa no Google e em todas as plataformas de pesquisas fazendo com que apareça para todo Brasil.
                </p>
            </div>
        </div>
    );
})

export { LayoutProdutosEcomerce, LayoutProdutosWebsite };