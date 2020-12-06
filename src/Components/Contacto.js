function Contacto() {
    return (
        <section id="contacto">
            <div className="text-contacto">
                <h2>CONTACTO</h2>
                <p>¡Si tienes dudas sobre <br />
                alguno de nuestros servicios,<br />
                estaremos siempre atentos a <br />
                atenderte con la mejor disposición!</p>
            </div>
            <form className="formulario">
                <h2>¡ESCRÍBENOS!</h2>
                <input type="text" placeholder="Ingresa tu nombre" />
                <input type="email" placeholder="Ingresa tu correo" />
                <textarea placeholder="Ingresa el mensaje"></textarea>
                <div className="box-btn-enviar">
                    <input className="btn-enviar" type="submit" value="Enviar" />
                </div>
                
            </form>
        </section>
    )
}

export default Contacto;