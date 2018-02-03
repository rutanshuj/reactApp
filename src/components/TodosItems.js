import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodosItems extends Component {

    render() {
        return (
            <li className = "Todo">
                <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

TodosItems.propTypes = {
    projects: PropTypes.object,
}
export default TodosItems;