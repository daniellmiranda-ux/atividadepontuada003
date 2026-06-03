import './style.css';

export default function Video() {
    return (
        // Adicione o id="videos" bem aqui para o link do menu funcionar!
        <section className="video-section" id="videos">
            <h2>Dedico aos meus amados pais❤️</h2>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/bsN1_oRPLns"
                    title="Roberto Carlos - Como é Grande o Meu Amor por Você"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}