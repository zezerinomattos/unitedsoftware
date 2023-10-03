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
                    <span>United Software: Transformando Ideias em Realidade Digital.</span>
                    <p>
                        Na United Software, estamos comprometidos em impulsionar o sucesso do seu negócio, conectando-o com o futuro digital. Somos uma equipe de profissionais altamente qualificados, especializados em construir sites, landing pages e sistemas sob medida para atender às suas necessidades exclusivas. Além disso, contamos com especialistas em mídias sociais e copywriters talentosos, prontos para elevar a presença da sua marca nas redes sociais.
                    </p>
                    <p>
                        Entendemos a importância de destacar sua marca em um mercado competitivo. É por isso que oferecemos soluções personalizadas que garantem que sua empresa se destaque no cenário digital. Trabalhamos em diversas frentes, utilizando a tecnologia para criar um futuro sólido para o seu negócio e proporcionando a visibilidade necessária para brilhar online.
                    </p>
                    <p>
                        Desenvolvemos projetos personalizados e responsivos, garantindo que seu negócio seja exibido com beleza e desempenho excepcional em qualquer dispositivo.
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
                                Na United Software, entendemos a necessidade de fazer sua empresa, marca ou negócio prosperar e se destacar em meio à concorrência acirrada. Nosso compromisso é direcioná-lo para o futuro, garantindo que sua presença online seja otimizada para ser encontrada pelos maiores buscadores do mundo.
                            </p>
                            <p>
                                Reconhecemos a importância crucial do design do seu website no sucesso do seu negócio. Quando os visitantes chegam a até você, a primeira impressão é fundamental. Se o visual não cativar imediatamente, eles podem não explorar seus produtos ou serviços.
                            </p>
                        </div>
                        <div className='paginas-superior-texto-dir'>
                            <p>
                                Na United Software, oferecemos um trabalho moderno e altamente criativo que desempenha um papel fundamental na geração de receita por meio de vendas e no aumento do reconhecimento da sua marca no ambiente digital.
                            </p>
                            <p>
                                Criamos layouts sob medida que atendem às necessidades exclusivas da sua empresa, ao seu público-alvo e à filosofia da sua marca. Utilizando nossa metodologia de prototipação, permitimos que nossos clientes participem ativamente do processo criativo, fazendo solicitações de alterações até que o design seja aprovado.
                            </p>
                        </div>
                    </div>
                    <h4>DEIXE NOSSA EQUIPE TE SURPREENDER!</h4>
                </div>
                <div className='paginas-inferior'>
                    <div className='paginas-inferior-textos'>
                        <h2>EXPERIÊNCIA VISUAL MODERNA</h2>
                        <p>
                            Talvez você não perceba, mas ao explorar um e-commerce ou visitar um site empresarial, o seu cérebro processa instantaneamente informações visuais de forma intuitiva. É nesse momento que a experiência visual entra em cena.
                        </p>
                        <p>
                            Um site bem organizado e com um design atraente ativa gatilhos mentais que você nem percebe. Instantaneamente, a sensação de confiabilidade surge em sua mente, tornando-se um fator determinante para a concretização de uma venda.
                        </p>
                        <p>
                            Na United Software, compreendemos a importância de uma experiência visual impactante. Nossos especialistas em design estão prontos para transformar a aparência do seu site em um poderoso ímã para clientes em potencial.
                        </p>
                    </div>
                    <div className='paginas-inferior-img'>
                        <img src={imgPaginaCapa} alt="Imagem de Capa" />
                    </div>
                </div>
                
                <Link to="/produtos" className='linkProdutos animation'>Conheça Nossos Produtos</Link>
            </section>
            
            <Footer />
        </>
    );
}