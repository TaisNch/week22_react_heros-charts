import './App.css';
import './Card.css';
import Card from './components/Card';
import data from './heros.json';

function App() {
  return (
    <div className="App">
       {data.map((i) => (
                <Card
                    name={i.name}
                    universe={i.universe}
                    alterego={i.alterego}
                    occupation={i.occupation}
                    friends={i.friends}
                    superpowers={i.superpowers}
                    info={i.info}
                />
                             ))}
    </div>
  );
}

export default App;
