import React from 'react';
import './App.css';

function Header(props){

  return(
    <header>
      <h1> {props.name}'s kitchen</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
    <p>We serve the most {props.adjective} food around</p>
    <ul style={{textAlign:"left"}}>
      {props.dishes.map((dish)=>(
      <li key={dish.id}>{dish.title}</li>
      ))}
      </ul>
  </section>
  )
}

function Footer(props){
  return(
    <footer>
      copyright {props.year}    
      yeah..!it's true..!!!!
    </footer>
  )
}

const dishes = [
  "macroni and cheese",
  "sandwiches",
  "burger"
];

const dishobjects = dishes.map((dish,i)=>({id:i, title:dish}));


function App() {
  return (
    <div className="App">
     <Header name="cindy"/>
     <Main adjective="amazing" dishes={dishobjects}/>
      <Footer year={new Date().getFullYear()}/>

    </div>
  );
  
}

export default App;
