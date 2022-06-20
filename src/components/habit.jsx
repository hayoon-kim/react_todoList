import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  componentDidMount(){
    console.log(`habit: ${this.props.habit.name} mounted`)
    //컴포넌트가 UI상에 등록이 되었을때
    // =사용자에게 보여졌을때
    //로딩스피너를 보여줘야 할 때 사용
  }
  
  componentWillUnmount(){
    console.log(`habit: ${this.props.habit.name} willUnmount`)
    //UI상에서 없어질 때
  }

  handleIncrement = ()=>{
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = ()=>{
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = ()=>{
    this.props.onDelete(this.props.habit);
  };


  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
        <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit;