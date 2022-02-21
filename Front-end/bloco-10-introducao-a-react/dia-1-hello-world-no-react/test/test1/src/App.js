import './index.css'
import React from "react";
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h1>Conteudo</h1>
          <p>Acesse agenda aqui</p>
          <section>
            <Card />
            <Card />
          </section>
        </div>
      </main>
    );
  }
}

export default App;
