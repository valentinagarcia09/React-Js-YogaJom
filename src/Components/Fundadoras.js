function Fundadoras(props) {
    return (
        <section id="fundadoras">
            <div className="fundadoras-title-box">
                <div className="title-fundadoras">
                    <h2>FUNDADORAS</h2>
                </div>
            </div>
            <div className="container-fotos-fundadoras">
                <div className="fundadoras-boxes">
                    <img src={props.img.marly_png} alt="" />
                    <div className="box-name-fundadoras">
                        <h3>MARLY<br />GONZALEZ</h3>
                    </div>
                </div>
                <div className="fundadoras-boxes">
                    <img src={props.img.ximen} alt="" />
                    <div className="box-name-fundadoras">
                        <h3>XIMENA<br />ECHEVERRY</h3>
                    </div>
                </div>
                <div className="fundadoras-boxes">
                    <img src={props.img.vale_png} alt="" />
                    <div className="box-name-fundadoras">
                        <h3>VALENTINA<br />GARCÍA</h3>
                    </div>
                </div>
                <div className="fundadoras-boxes">
                    <img src={props.img.maria_png} alt="" />
                    <div className="box-name-fundadoras">
                        <h3>ISABEL<br />MONTOYA</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fundadoras;