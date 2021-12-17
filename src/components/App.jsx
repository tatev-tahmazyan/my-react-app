// import Block from './component1.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './Section';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <Block name="Tatev" age="19" /> */}
        <Section />
    </div>
  );
}

export default App;
