import React from 'react'
import Todo from "./Todo"
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return(
        <div className="todo-container">
        
        <TransitionGroup component='ul' className="todo-list" >
            { filteredTodos.map((todo) => (
                <CSSTransition
                    timeout={1000}
                    key={todo.id}
                    classNames= "todo" unmountOnExit>

                    <Todo 
                    setTodos={setTodos}
                    todos={todos}
                    todo= {todo}
                    key = {todo.id}
                    text = {todo.text} 
                    />

                </CSSTransition>
            ))
                }
        </TransitionGroup>
    
      </div> );
}

export default TodoList;