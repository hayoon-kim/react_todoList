
import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  
  state = {
    habits:[
      { id: 1, name: 'Reading', count: 0},
      { id: 2, name: 'Running', count: 0},
      { id: 3, name: 'Coding', count: 0},
    ], //배열
    
    // ※데이터를 가지고 있는 곳이 데이터를 수정하기에 가장 좋은 곳.
  }

  handleIncrement = habit => {
    const habits = this.state.habits.map(item=>{
      if(item.id === habit.id) {
        return { ...habit, count: habit.count +1 }
      } 
      return item;
    })
    this.setState({ habits: habits });
    console.log(`handleIncrement ${habit.name}`)
  }

  handleDecrement = habit => {
    const habits = this.state.habits.map(item=>{
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }
      } 
      return item;
    })
    this.setState({ habits: habits });
    console.log(`handleDecrement ${habit.name}`)
  }
  
  handleDelete = habit => {
    const habits = this.state.habits;
    const index = habits.indexOf(habit);
    habits.splice(index,1);
    this.setState({ habits: habits });
    console.log(`handleDelete ${habit.name}`)
  }

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name: name, count: 0}];
    this.setState({habits: habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return {...habit, count: 0};
      }
      return habit;
    });
    this.setState({habits: habits});
  }


  render() {
    return (
            <div>
              <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
              <Habits habits={this.state.habits}
                      onIncrement={this.handleIncrement} 
                      onDecrement={this.handleDecrement} 
                      onDelete={this.handleDelete}
                      onAdd={this.handleAdd}
                      onReset={this.handleReset}
                      />
            </div>
    )
  }
}

export default App;
