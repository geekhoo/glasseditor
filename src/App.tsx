import React from 'react';
import logo from './logo.svg';
import './App.css';
import EditorComponent from './MEditorComponent';
//import { Editor } from 'react-draft-wysiwyg';
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
 

function App() {
  return (
    <div className="App">  
      <div>
        <EditorComponent html='' id='editor' css=''  />
      </div>


    
     
    </div>
 
 );
}

export default App;
