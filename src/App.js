import './App.css';
import { useState } from 'react';

function App() {

  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>It's my toDo   ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { time: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {
            return (<div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  setTodos(toDos.filter(obj2 => {
                    if (obj2.time === obj.time) {
                      obj2.status = e.target.checked;
                    } return obj2;
                  }))
                  console.log(e.target.checked);
                  console.log(obj);
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => {
                  setTodos(toDos.filter((obj2) => {
                    return obj2.time !== obj.time;
                  }))
                }} className="fas fa-times"></i>
              </div>
            </div>)
          })}
        <br />
        <div style={{ color: 'white' }}><h2>Completed List</h2></div>
        {
          toDos.map((obj) => {
            return obj.status ? (<h2 style={{ color: 'white' }}> -&gt; {obj.text}</h2>) : null;
          })
        }
      </div>
    </div>
  )
};

export default App;
