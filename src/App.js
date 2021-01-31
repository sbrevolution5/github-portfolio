import logo from './logo.svg';
import './App.css';
import '../components/App/Header';

function App() {
  return (
    <div className="App">
      <Header  logo ={logo}/>
      <Profile />
    </div>
  );
}

export default App;
