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
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="BappaRaz" nayika="saka"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
      <Person></Person>
      <h5>New Component. YAY</h5>
      <p id="totcompany">React is Rockzzz !</p>
      <Friend phone="018895"></Friend>
      <Friend movie="Singham" phone="019995"></Friend>
      <Friend></Friend>
    </div>
  );
}

// person component create
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
