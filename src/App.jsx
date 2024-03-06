import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      <ol>
        <li>ReactJS è una libreria JavaScript per la creazione di interfacce utente.</li>
        <li>ReactJS è una libreria, non un framework. Vero</li>
        <li>Il file package.json contiene molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste dall’applicazione. Falso</li>
        <li>create-react-app è l’unico modo possibile per creare un’applicazione React. Falso</li>
        <li>Comando per creare una nuova create-react-app con nome “test” è: "npx create-react-app test"</li>
        <li>Cos’è un componente React? è un blocco di logica/contenuto riutilizzabile all’interno dell’applicazione.</li>
        <li>Un componente React può venire creato in tre modi: come funzione, classe o interfaccia. Vero</li>
        <li>Le props sono frammenti di informazione assegnati all’invocazione di un componente React, utili al fine di rendere il componente dinamico e più riutilizzabile. Vero</li>
        <li>Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è possibile fare il contrario. Falso</li>
        <li>Da dove possono venire recuperate le props all’interno di un componente React creato come classe? Possono essere recuperate all’interno dello oggetto ‘this’, dentro un sotto-oggetto chiamato ‘props’.</li>
      </ol>
        </p>
      </header>
    </div>
  );
}

export default App;
