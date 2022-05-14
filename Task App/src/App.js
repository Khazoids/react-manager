import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';


     
function App() {
  const [task, setTask] = useState([
  ])

  const addTask = ( {text, date, reminder}  ) => {
    console.log(task)
    const id = Math.floor(Math.random() *1000);
    
    const newTask = { text, date, reminder, id, ...task }
    setTask([...task, newTask]);
    console.log(task)
  }

  const removeTask = ( id ) => {
    setTask(task.filter(task => task.id !== id))
  }
  

  return (
    <div className="App container wrapper ">
      <div className='container wrapper dead-center' style={{padding: '10rem'}}>
          <Header addTask={addTask}/>
          <Tasks  task={task} removeTask={removeTask}/>
      </div>
    </div>
  );
}

export default App;
