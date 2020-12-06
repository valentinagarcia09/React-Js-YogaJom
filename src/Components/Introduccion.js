function Introduccion(props) {
    return (
        <section id="introduccion">
            <div className="left-introduccion">
                <video src={props.img.video} controls></video>
            </div>
            <div className="right-introduccion">
                <h2>YOGAJOM <br />INTRODUCCIÓN</h2>
                <p>En este vídeo, te explicaremos más <br />
                    detalles y benificios sobre nuestro curso.<br />
                    Así, podrás conocer lo que vas a practicar<br />
                    con determinación y perseverancia.<br />
                    Si te interesa saber más sobre nosotros<br />
                    ¡Siguenos en nuestras redes sociales!
                </p>
                <div className="contenedor-redes">
                    <a href="#"><img src={props.img.face} alt="" /></a>
                    <a href="#"><img src={props.img.instag} alt="" /></a>
                    <a href="#"><img src={props.img.yutu} alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default Introduccion;