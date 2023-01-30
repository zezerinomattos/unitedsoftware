import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

// IMAGES
import imgSobre from '../../assets/sobre.png';
import imgPaginaCapa from '../../assets/paginas-capa.png';

export default function Home(){

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return(
        <>           
            <header className='container'>
                <Navbar/>                
                <div className='header-inf-mestre'>
                    <div className='textos'>
                        <h1>UNITED SOFTWARE</h1>
                        <h2>Welcome to the Future!</h2>

                        <Link to="/contato" >FAÇA UM ORÇAMENTO SEM COMPROMISSO</Link>
                    </div>
                </div>
            </header>

            <section className='sobre' data-aos='fade-up'>
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

            <section className='paginas'>
                <div className='paginas-superior'>
                    <h1 >LAYOUT EXCLUSIVO PARA SUA EMPRESA</h1>
                    <h3>EXPERIÊNCIAS MODERNAS, EFICIENTES, INOVADORAS E INTUITIVAS</h3>
                    <div className='paginas-superior-texto'>
                        <div className='paginas-superior-texto-esq'>
                            <p>
                                Você quer ver sua empresa, sua marca ou seu negócio crescer, ganhar corpo, se destacar entre as inúmeras concorrências? Então encaminhe-a para o futuro, aqui na United Software vamos cuidar para que seu negócio trafegue pelo mundo através dos maiores buscadores do planeta.
                            </p>
                            <p>
                                O design da sua loja é essencial para o sucesso do seu negócio. A primeira coisa que seus possíveis clientes observarão ao chegarem ao seu portal é a aparência dele. Para isso o visual precisa atraí-los, caso contrário, nem se darão ao trabalho de olhar os seus produtos.
                            </p>
                        </div>
                        <div className='paginas-superior-texto-dir'>
                            <p>
                                Produzimos um trabalho moderno e altamente criativo o qual vai cumprir como papel principal de comercialização: a criação de receitas através de vendas e reconhecimento da marca no meio digital.
                            </p>
                            <p>
                                Desenvolvemos o layout conforme as necessidades da sua empresa, público alvo e características baseado na sua linha de produtos e filosofia. Com nossa metodologia de prototipação nossos clientes acompanham todo processo criativo do seu material, podendo solicitar alterações até a sua aprovação.
                            </p>
                        </div>
                    </div>
                    <h4>DEIXE NOSSA EQUIPE TE SURPREENDER!</h4>
                </div>
                <div className='paginas-inferior'>
                    <div className='paginas-inferior-textos'>
                        <h2>EXPERIÊNCIA VISUAL MODERNA</h2>
                        <p>
                            Você não percebe, mas quando vamos comprar um produto em um e-commerce ou visitar um site de uma empresa, intuitiva e rapidamente nosso cérebro recebe todas as informações visuais dos mesmos.
                        </p>
                        <p>
                            Quando visualizamos uma loja, um site ou uma página bem organizada e com um belo design, são ativados gatilhos mentais sem percebemos e logo vem em nossa mente que "esse local é confiável". Isso se torna um fator determinante para que a venda se concretize.
                        </p>
                    </div>
                    <div className='paginas-inferior-img'>
                        <img src={imgPaginaCapa} alt="Imagem de Capa" />
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
}