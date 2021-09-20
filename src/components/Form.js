import { useState } from "react";
import PropTypes from "prop-types";

function Form (props){

    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }
    
    return(
    <form onSubmit={handleSubmit}>  
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
              value={name}
              onChange={handleChange}
            />
          </label>
        </h2>

        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}

Form.propTypes = {
    addTask: PropTypes.func.isRequired
  };

export default Form;