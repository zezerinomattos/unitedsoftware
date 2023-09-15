import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// MY IMPORTS
import './style.css';
import './responsive.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Login(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [message, setMessage] = useState('');

    const instagram = 'https://www.instagram.com/zezerino_mattos/';
    const facebook = 'https://www.facebook.com/profile.php?id=100081137054124';
    const whats = 'https://wa.me/5548991589625?text=Olá,%20eu%20gostaria%20de%20informações%20sobre...';

    function sendEmail(e){
        e.preventDefault();

        if(name === ''){
            alert('Preencha o campo NOME!');
            return;
        }else if(email === ''){
            alert('Preencha o campo E-MAIL!');
            return;
        }
        else if(message === ''){
            alert('Preencha o campo MENSAGEM!');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            telephone: fone
        }

        emailjs.send('service_l0zwn0i', 'template_6al7z04', templateParams, 'Y-OTkZwPWkC9T44Kh')
        .then((response) => {
            // console.log('EMAIL EVIADO', response.status, response.text);
            setName('');
            setEmail('');
            setFone('');
            setMessage('');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return(
        <div className='mestre'>
            <Navbar />
            <section className='container'>
                <div className='contato-dir'>
                    <h1 className='title'>Entre em contato <br/> com a nossa equipe</h1>
                    <span>
                        Envie uma mensagem ou entre em contato através dos canais <br/> abaixo para tirar dúvidas sobre nossas soluções, relatar <br/> problemas ou dar sugestões. Estamos aqui para ajudar!
                    </span>

                    <form className="form" onSubmit={sendEmail}>
                        <input 
                            className="input"
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        
                        <input 
                            className="input"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input 
                            className="input"
                            type="text"
                            placeholder="(  )_____-____"
                            onChange={(e) => setFone(e.target.value)}
                            value={fone}
                        />

                        <textarea 
                            className="textarea"
                            placeholder="Digite sua mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                        <input className="button" type="submit" value="Enviar" />
                    </form>

                </div>

                <div className='contato-esq'>
                    <ul className='esq-redes'>
                        <li><a href={instagram} target='blank'><ion-icon name="logo-instagram"></ion-icon> Instagram</a></li>
                        <li><a href={facebook} target='blank'><ion-icon name="logo-facebook"></ion-icon> Facebook</a></li>
                        <li><a href={whats} target='blank'><ion-icon name="logo-whatsapp"></ion-icon> Whatsapp</a></li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}