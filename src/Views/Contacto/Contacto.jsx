import { useRef } from 'react';
import './Contacto.css';
import emailjs from '@emailjs/browser';

const Contacto = () => {
   
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_zb3wash', 'template_yifi27r', form.current, {
            publicKey: 'brGmm_A-pdL1z3Rbj',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
    };

    return (
        <section className='container-principal'>

            <div className='container-centro'>

                <div className='contacto'>
                    <h2>Hola! Contactame abajo</h2>

                    <form ref={form} onSubmit={sendEmail} 
                    action="#">
                        <div className='input-box'>
                            <div className='input-campo campo'>
                                <input type="text" placeholder='nombre' id='nombre' name='nombre'
                                className="item" autoComplete='off'/>
                                <div className='error-txt'>El nombre no puede quedar vacio</div>
                            </div>
                            <div className='input-campo campo'>
                                <input type="text" placeholder='email' id='email' name='email'
                                className="item" autoComplete='off'/>
                                <div className='error-txt'>El email no puede quedar vacio</div>
                            </div>
                        </div>

                        <div className='input-box'>
                            <div className='input-campo campo'>
                                <input type="text" placeholder='celular' id='celular' name='celular'
                                className="item" autoComplete='off'/>
                                <div className='error-txt'>El celular no puede quedar vacio</div>
                            </div>
                            <div className='input-campo campo'>
                                <input type="text" placeholder='asunto' id='asunto' name='asunto'
                                className="item" autoComplete='off'/>
                                <div className='error-txt'>El Asunto no puede quedar vacio</div>
                            </div>
                        </div>

                        <div className='area-texto campo'>
                            <textarea name="mensaje" id="mensaje" cols={30} rows={10} placeholder='Tu mensaje...' className="item"></textarea>
                            <div className='error-txt'>El mensaje no puede quedar vacio</div>
                        </div>
                        <button type='submit'>Enviar</button>

                    </form>

                </div>

            </div>
        
        </section>
    )
}

export default Contacto