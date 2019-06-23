import React from 'react';
import {SketchField, Tools} from 'react-sketch';
import './App.css';

function Sketch() {
  return (
    <div className="App">
      <header className="App-header">
      <SketchField width='1024px'
                         height='768px'
                         tool={Tools.Pencil}
                         lineColor='black'
                         lineWidth={3}/>
      </header>
    </div>
  );
}

export default Sketch;
