function Footer(props) {
    return (
        <div>
            <div className="msg-footer">
                <h3>YOGAJOM TU TRANQUILIDAD<br />
                EN NUESTRAS MANOS.
                </h3>
            </div>
            <footer>
                <div className="left-footer">
                    <img src={props.img.logo} alt="Logo" />
                    <p> Copyright © 2020 Yogajom</p>
                </div>
                <div className="right-footer">
                    <div className="sections-footer">
                        <h4>Compañia</h4>
                        <a href="#">Blog</a>
                        <a href="#">Sobre nosotros</a>
                        <a href="#">Formulario</a>
                    </div>
                    <div className="sections-footer">
                        <h4>Ayuda</h4>
                        <a href="#">Foro de preguntas</a>
                        <a href="#">Costos y condiciones</a>
                    </div>
                    <div className="sections-footer">
                        <h4>Social</h4>
                        <div className="boxes-social-footer">
                            <img src={props.img.face} alt="" /><a href="#">Facebook</a>
                        </div>
                        <div className="boxes-social-footer">
                            <img src={props.img.instag} alt="" /><a href="#">Instagram</a>
                        </div>
                        <div className="boxes-social-footer">
                            <img src={props.img.yutu} alt="" /><a href="#">Youtube</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>        
    )
}

export default Footer;