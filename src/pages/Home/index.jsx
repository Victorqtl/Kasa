import data from '@/data/logements.json'
import Card from './components/Card';

export default function HomePage() {
	return (
        <div>
            <h1>Accueil</h1>
            <section>
                {data.map(logement => 
                    <li key={logement.id}>
                        <span>{logement.title}</span>
                    </li>
                )}
            </section>
        </div>
	);
}
