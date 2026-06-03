import './style.css';
import foto1 from '../../../assets/foto1.jpeg';
import foto2 from '../../../assets/foto2.jpeg';
import foto3 from '../../../assets/foto3.jpeg';

export default function Galeria() {
    return (
        <section className="gallery-section" id="memorias">
            <h2>Galeria de Memórias</h2>
            <p className="gallery-desc">Momentos especiais e lembranças eternas gravadas no peito.</p>
            
            <div className="gallery-grid">
                <div className="memory-card">
                    <img src={foto1} alt="Foto de Família" className="memory-img" />
                    <div className="card-info">
                        <h3>Nossa Base</h3>
                        <p>O começo de tudo e o carinho compartilhado.</p>
                    </div>
                </div>

                <div className="memory-card">
                    <img src={foto2} alt="Sorrisos Guardados" className="memory-img" />
                    <div className="card-info">
                        <h3>Dias Felizes</h3>
                        <p>Porque as melhores memórias são feitas de sorrisos simples.</p>
                    </div>
                </div>

                <div className="memory-card">
                    <img src={foto3} alt="Conquistas Coletivas" className="memory-img" />
                    <div className="card-info">
                        <h3>Apoio Mútuo</h3>
                        <p>Presentes em cada vitória e celebração.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}