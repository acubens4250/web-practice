import './App.css';
import Logo from './components/Logo'; // Logo 컴포넌트 임포트
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo size={500}/>

        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        
        <Paragraph size={14} color="blue">
          I'am a blue paragraph with size 14.
        </Paragraph>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
