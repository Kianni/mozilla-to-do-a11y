//import React from "react";
import PropTypes from "prop-types";

export default function Todo(props) {
    // const name = props.name;
    return (
        <li className="todo stack-small">
        <div className="c-cb">
          <label className="todo-label" htmlFor={props.id}>
            <input id={props.id} type="checkbox" defaultChecked={props.completed} />
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    );
  }

Todo.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  };