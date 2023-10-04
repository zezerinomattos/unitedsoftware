import React from 'react';

// MY IMPORTS
import './style.css';
import './responsive.css';

const LayoutProdutosWebsite = ((props) => {
    return(
        <div className='container'>

            <div className='text'>
                <h1>Sites Institucionais</h1>
                <span>Soluções de Sites Institucionais para Empresas e Negócios.</span>
                <p>
                    Se você procura aprimorar a presença online da sua empresa, nossa equipe na United Software tem a solução ideal. Oferecemos serviços de criação de sites institucionais que seguem padrões rigorosos de desenvolvimento, garantindo os melhores resultados para o seu negócio.
                </p>
                <p>
                    Nosso foco é modernizar a sua empresa, proporcionando um site institucional totalmente adaptável a todos os dispositivos, incluindo celulares, tablets e computadores. Dessa forma, você pode alcançar seu público-alvo em qualquer lugar, a qualquer momento.
                </p>
                <p>
                    Não basta apenas ter um site, é crucial que ele seja encontrado pelo seu público-alvo. É por isso que não apenas construímos sites excepcionais, mas também os otimizamos para os mecanismos de busca, incluindo o Google. Garantimos que sua empresa seja facilmente localizada em pesquisas em todo o Brasil.
                </p>
            </div>

            <div className='imagem-layout-container'>
                <img src={props.img1} alt="" />
                <img src={props.img2} alt="" />
            </div>
        </div>
    );
});

const LayoutProdutosLandingPage = ((props) => {
    return(
        <div className='container container-color'>

            <div className='text'>
                <h1>Landing Page</h1>
                <span>Landing Pages da United Software - A Chave para Conversões de Sucesso</span>
                <p>
                    Na United Software, estamos dedicados a impulsionar o crescimento do seu negócio e aumentar sua visibilidade no mundo digital. Se você procura uma solução eficaz para atrair mais clientes e alcançar resultados surpreendentes, você está no lugar certo.
                </p>
                <p>
                    Você já se perguntou como tornar cada visita ao seu site uma oportunidade de conversão? Nossas Landing Pages são a resposta. Combinando design moderno, conteúdo envolvente e estratégias de marketing eficazes, transformamos visitantes em clientes fiéis.
                </p>
                <p>
                    <strong>Otimização para Conversões:</strong> Cada elemento da nossa Landing Page é cuidadosamente projetado para maximizar as taxas de conversão, transformando visitantes em clientes.
                </p>
                <p>
                    <strong>Responsividade:</strong> Nossas páginas são responsivas e funcionam perfeitamente em todos os dispositivos, garantindo que você alcance seu público onde quer que eles estejam.
                </p>
            </div>

            <div className='imagem-layout-container'>
                <img src={props.img1} alt="" />
                <img src={props.img2} alt="" />
            </div>
        </div>
    );
});

const LayoutProdutosEcomerce = ((props) => {
    return(
        <div className='container'>

            <div className='text'>
                <h1>E-commerce</h1>
                <span>Comece a vender online, crie sua loja virtual e saia na frente do seu concorrente.</span>
                <p>
                    Realize vendas de forma automatizada com sua Loja Online. Sistemas de E-commerce completos e mordernos, vamos desenvolver o layout conforme as necessidades da sua empresa, público alvo e baseado na sua linha de produtos.
                </p>
            </div>

            <div className='imagem-layout'>
                <img src={props.img} alt="" />
            </div>

        </div>
    );
});

export { LayoutProdutosEcomerce, LayoutProdutosWebsite, LayoutProdutosLandingPage };