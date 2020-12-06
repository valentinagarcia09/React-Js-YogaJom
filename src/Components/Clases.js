function Clases(props) {
    console.log(props.img.hatha_yoga);
    return (
        <section id="clases">
            <h2>CLASES QUE BRINDAMOS</h2>
            <div className="clases-container">
                <div className="clases-boxes">
                    <img src={props.img.hatha_yoga} alt="" />
                    <div className="description-clase">
                        <h3>HATHA YOGA</h3>
                        <p>Práctica enfocada en bajar los niveles <br />
                            de estrés y tratar la ansiedad a través de<br />
                            posturas y respiración</p>
                    </div>
                    <button>VER MÁS</button>
                </div>
                <div className="clases-boxes">
                    <img src={props.img.kundalini2} alt="" />
                    <div className="description-clase">
                        <h3>KUNDALINI YOGA</h3>
                        <p>Práctica enfocadada en posturas para<br />
                        estimular el sistema nervioso, digestivo,<br />
                        circulatorio, linfático, etc.</p>
                    </div>
                    <button>VER MÁS</button>
                </div>
            </div>
        </section>
    )
}

export default Clases;