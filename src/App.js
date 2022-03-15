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
      <Person></Person>
      <Person></Person>
      <h5>New Component. YAY</h5>
      <p>React is Rockzzz !</p>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

// person component create
function Person() {
  return (
    <div className="person">
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}

function Friend() {
  return (
    <div className="container">
      <h3>Name: Ajay Devgan</h3>
      <p>job: Fighting</p>
    </div>
  )
}

export default App;
