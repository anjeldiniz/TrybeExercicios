import React from 'react';
import './index.css';
import Pokemon from './Components/Pokemon';
import pokemons from './data'

class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h1>Pokedex</h1>
          <section>
          {
            
          pokemons.map((item) => {
            return <Pokemon key={item.id} itemInfo={item} />
          })
          }
          </section>
        </div>
      </main>
    )
  }
}

export default App;
