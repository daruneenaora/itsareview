import React from 'react';
import './App.css';
import Review from './components/review';
import data from './data/test';


function App() {
  return (
    <div>
      {
        data.map(function(x, index){
          return (<Review country={x.name} cap={x.cap} animal={x.animal} key={index} />);
        })
      }
    </div>
  );
}

export default App;
