import './ToDoCounter.css';
import './ToDoSearch.css';
import './ToDoList.css';
import './ToDoButton.css';
import React from 'react';
import ToDoCounter from './ToDoCounter';
import ToDoButton from './ToDoButton';
import ToDoItem from './ToDoItem';
import ToDoList from './ToDoList';
import ToDoSearch from './ToDoSearch';



const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar pimentón", completed: false },
  { text: "Picar ajo", completed: false },
  { text: "Sofreir todo", completed: false },
]




function App(props) {
  return (
    <React.Fragment>
      <ToDoCounter/>

      <ToDoSearch/>
      
      <ToDoList>
        {todos.map( item => (
          <ToDoItem text={item.text} key={item.text} />
        ))

        }
        
      </ToDoList>
      <ToDoButton/>
    </React.Fragment>
  );
}

export default App;
