import React, {useState, useEffect, useCallback} from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status,setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos]= useState([]);

  //Fuctions
  const filterHandler = useCallback(() => {
    switch(status){
      case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted': setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default: setFilteredTodos(todos);
      break;
    }
  },[todos, status]);

  const setLocalTodos = useCallback(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const getLocalTodos= () => {

    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };

  //use effect

  useEffect(() => {
    getLocalTodos();
  },[]);
  
  useEffect(() =>{
    filterHandler();
    setLocalTodos();
  },[status,todos, filterHandler, setLocalTodos]);


  return (
    <div className="App">
      <header>
        <h1>Anupam's Todo List</h1>
      </header>

      <Form todos={todos} setTodos= {setTodos} 
      setInputText={setInputText} inputText= {inputText}
      status={status} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} 
        filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
