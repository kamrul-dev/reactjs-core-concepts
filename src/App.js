import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'James', job: 'Singer' };
const singer2 = { name: 'Runa Laila', job: 'Singer2' };

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {
  return <h1>Sakib Al Hasan</h1>
}

export default App;
