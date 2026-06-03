import './style.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">❤️ Homenagem de Amor</div>
            <nav className="nav-menu">
                <a href="#inicio" className="header-links">Início</a>
                <a href="#mae" className="header-links">Mãe</a>
                <a href="#pai" className="header-links">Pai</a>
                <a href="#memorias" className="header-links">Memórias</a>
                <a href="#videos" className="header-links">Vídeos</a>
            </nav>
        </header>
    );
}