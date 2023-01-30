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

export {LayoutProdutosEcomerce};