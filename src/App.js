import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todos = [
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
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleToggle = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return (!item.completed);
      })
    });
  }

  handleAddItem = (item) => {
    const newTask ={
      task: item,
      id: Date.now,
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    });
  }

  handleToggleItem = (item)=> {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(e => {
        if (e.id === item.id) {
          return {...e, completed: !e.completed}
        } else {
          return e;
        }
      })
    })
  }

  render() {
    return (
      <div className= "Todo App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem}/>
        </div>
        <TodoList handleToggleItem={this.handleToggleItem} todos={this.state.todos} />
        <button onClick={this.handleToggle} className="clear-btn">Clear completed</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
