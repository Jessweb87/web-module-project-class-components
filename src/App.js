import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  
  handleAdd = (task) => {
    //1. SetState
    //2. Change todos
    //3. Make a copy todos
    //4. Add a new todo to the end.

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }
  handleClear = () => {
     //1. setState
     //2. loop through all todos
     //3. remove all todos that have been completed === true
     //4. save filtered todos to state.

     this.setState({
       ...this.state,
       todos: this.state.todos.filter(todo  => {
         return (todo.completed === false);
       })
     });
  }

  handleToggle = (clickedId) => {
        //1. setState
    //2. change todos
    //3. find the todo that we clicked on
    //4. flip the value of the completed for that todo
    //5. keep all other todos the same.
    
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=> {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    });
  }


  render() {
    const { todos } = this.state;
    return (
    <div>
      <h1>Todos</h1>

     <TodoList handleToggle={this.handleToggle} todos={todos}/>

    <TodoForm handleAdd={this.handleAdd}/>

      <button onClick={this.handleClear}>Clear</button>
    </div>
    );
  }
}


export default App;
