
import './App.css';

const Person = (props) => {
  return (
    <div>
      <h2>Name : {props.name} </h2>
      <h2> Last Name : {props.lastName}</h2>
      <h2> Age : {props.age}</h2>
    </div>
  )}

const App=()=> {

  return (
    <div className="App">
      
      <Person name={'sara'} lastName={'sira'} age={'20'}/>
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
