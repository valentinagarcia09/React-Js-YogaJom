import Nav from './Nav';
import Banner from './Banner';
import Conocenos from './Conocenos';
import Clases from './Clases';
import Introduccion from './Introduccion';
import Fundadoras from './Fundadoras';
import Contacto from './Contacto';
import Footer from './Footer';

import imagenes from '../Assets/Imagenes';

import "../index.css";

function Home() {
    return (
        <div>
            <section id="welcomer-section">
                <Nav img={imagenes} />
                <Banner />
            </section>
            
            <Conocenos />

            <Clases img={imagenes} />

            <Introduccion img={imagenes} />

            <Fundadoras img={imagenes} />

            <Contacto />

            <Footer img={imagenes} />
        </div>
        
    )
}

export default Home;