import React from 'react';

import { Link as Links} from "react-scroll";

// MY IMPORTS
import './style.css';
import './responsive.css';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MarketingEbook from '../../assets/MarketingEbook.jpeg';


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

                        <Links to="conteudo" spy={true} smooth={true} offset={270} duration={500}>QUERO COMPRAR AGORA</Links>
                    </div>
                </div>
            </header>
            <main>
                <section className='conteudo'>
                    <div className='conteudo-container'>
                        <h1>Quer ter sucesso no Instagram e vender mais?</h1>
                        <p className='apresentacao'>
                            Você já parou para pensar em como o Instagram pode ser uma ferramenta poderosa para alavancar suas vendas? Se a resposta for não, então temos algo especial para você: o nosso novo e-book "Estratégias de Marketing para Vender no Instagram".
                        </p>
                        <p className='apresentacao'>
                            Com o intuito de trazer as técnicas mais inovadoras e efetivas para nossos clientes, a United Software foi buscar inspiração em estratégias de sucesso no exterior. Agora, trazemos para você em nosso e-book as técnicas mais poderosas que estão fazendo sucesso no mundo todo. Com esse material em mãos, você poderá aplicar as mesmas táticas utilizadas pelos maiores players do mercado e alcançar o sucesso nas suas vendas pelo Instagram. Confira abaixo alguns dos segredos que estão sendo revelados em nosso e-book "Estratégias de Marketing para Vender no Instagram":
                        </p>

                        <div className='conteudo-inferior'>
                            <div className='inferior-img'>
                                <img src={MarketingEbook} alt="Imagem da Capa do E-book" />
                            </div>
                            <div className='inferior-texto'>
                                <p><ion-icon name="logo-instagram"></ion-icon> Quais são as melhores estratégias de marketing para vender no Instagram;</p>                         
                                <p><ion-icon name="logo-instagram"></ion-icon> Como otimizar sua bio do Instagram para vender produtos ou serviços;</p>
                                <p><ion-icon name="logo-instagram"></ion-icon> Quais são as melhores práticas para criar conteúdo de qualidade no Instagram para promover produtos;</p>
                                <p><ion-icon name="logo-instagram"></ion-icon> Como usar o Instagram Ads para aumentar as vendas;</p>
                                <p><ion-icon name="logo-instagram"></ion-icon> Como criar uma estratégia de influenciadores no Instagram para aumentar as vendas;</p>
                                <p><ion-icon name="logo-instagram"></ion-icon> Quais são as ferramentas e aplicativos disponíveis para ajudar na venda no Instagram;</p>
                                <p><ion-icon name="logo-instagram"></ion-icon> Como usar o Instagram Stories para aumentar as vendas;</p>
                                <p><ion-icon name="logo-instagram"></ion-icon> Quais são as principais métricas a serem acompanhadas no Instagram para avaliar o sucesso das vendas;</p>
                                <p><ion-icon name="logo-instagram"></ion-icon> Quais são as melhores maneiras de interagir com os seguidores do Instagram para impulsionar as vendas;</p>   
                                <p><ion-icon name="logo-instagram"></ion-icon> Quais são as melhores maneiras de interagir com os seguidores do Instagram para impulsionar as vendas;</p>   
                                <p><ion-icon name="logo-instagram"></ion-icon> Como usar o Instagram para fazer vendas online e offline;</p>  
                                <p><ion-icon name="logo-instagram"></ion-icon> Exemplos de abordagem prontos para um copia e cola;</p> 
                                <p><ion-icon name="logo-instagram"></ion-icon> Entre muitas outras estrategias de Marketing para vender no Instagram;</p>                             
                            </div>
                        </div>

                        <div class="preco-guia">
                            <span>De R$ 99,90</span>
                            <div class="linha"></div>
                            <h4 class="valor">Por R$ 29,90</h4>
                        </div>

                        <a href="https://pay.kiwify.com.br/IhqDpIi" target="blank">QUERO COMPRAR AGORA</a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}