import React from 'react'

const Form = ({setInputText,inputText, todos, setTodos, setStatus}) => {

     const submitTodoHandler = (e) =>{
         e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() }]);

        setInputText("");
     }

     const textChangedHandler = (e) =>{
         setInputText(e.target.value);
     }

     const statusHandler= (e) =>{
        setStatus(e.target.value);
     }

    return (<form>
        <input onChange={textChangedHandler} maxlength="40" type="text" value={inputText} className="todo-input" required/>
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>)
}

export default Form;