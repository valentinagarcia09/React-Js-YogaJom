function Nav(props) {
    return (
        <header>
            <div className="logo-box">
                <img src={props.img.logo} alt="Logotipo página Yoga" />
                
            </div>
            <nav>
                <a href="#welcomer-section">Inicio</a>
                <a href="#conocenos">Conócenos</a>
                <a href="#clases">Clases y Tarifas</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <div className="menu-hamburgesa-box">
                <label for="btn-menu"><img src={props.img.menu} alt="" /></label>
                <input type="checkbox" id="btn-menu" />
                <div className="menu">
                    <a href="#welcomer-section">Inicio</a>
                    <a href="#conocenos">Conócenos</a>
                    <a href="#clases">Clases y Tarifas</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </div>
            
        </header>
    )
}

export default Nav;