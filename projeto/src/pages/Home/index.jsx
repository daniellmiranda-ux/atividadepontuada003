import './style.css';
import Hero from '../../components/sections/Hero';
import Mae from '../../components/sections/Mae';
import Pai from '../../components/sections/Pai';
import Galeria from '../../components/sections/Galeria';
import Videos from '../../components/sections/Video'; // Alterado de 'Videos' para 'Video'

export default function Home() {
    return (
        <main className="main-content">
            <Hero />
            <Mae />
            <Pai />
            <Galeria />
            <Videos />
        </main>
    );
}