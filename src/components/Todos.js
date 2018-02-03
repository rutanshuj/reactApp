import React, { Component } from 'react';
import TodosItems from "./TodosItems";
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                //console.log(project);
                return(
                    <TodosItems key = {todo.title} todo = {todo}/>
                )
            });
        }

        return (
            <div className="Todo">
                <h3> Todo1 List</h3>
                {todoItems}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array,
}
export default Todos;
