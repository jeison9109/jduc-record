import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xqkwqnqa");
    if (state.succeeded) {
        return <p>Gracias por tu mensaje!!</p>;
    }
    return (

        <form
            method="POST" id="yeisonivanserna@gmail.com"
            action="https://formspree.io/f/xqkwqnqa"
            onSubmit={handleSubmit}>

            <div className='contenedor-form'>

                <div className='contenedor-nombre'>
                    <label style={{ paddingRight: '3px', width: '60px' }} htmlFor="full-name">Nombre</label>
                    <input type="text"
                        name="name"
                        id="full-name"
                        placeholder="Nombre y Apellido"
                        required="">
                    </input>
                </div>

                <div className='contenedor-correo'>
                    <label style={{ paddingRight: '10px', width: '60px' }} htmlFor="email">
                        Correo
            </label>
                    <input

                        type='text'
                        name='name'
                        id='full-name'
                        placeholder='email@domain.com'
                        required=''
                    />
                </div>

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />

                <div className='contenedor-mensaje'>
                    <label style={{ paddingLeft: '15px', width: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} htmlFor="message">Mensaje</label>
                    <textarea
                        rows="8"
                        cols="80"
                        id="message"
                        name="message"
                    />
                </div>

                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <div className='button'>
                    <button type="submit" disabled={state.submitting}>
                        Enviar

            </button>
                </div>

            </div>
            <footer>
                <p>Julian David Uribe Cruz</p>
                <p class="copyrigth">&copy;Todos los derechos reservados</p>
            </footer>

        </form>

    );
}



const Contacto = () => {
    return (
        <div>
            <div className='titulo-contacto'>
            <h1>CONTACTANOS</h1>
            </div>
            <ContactForm></ContactForm>

        </div>

    );
};

export default Contacto;