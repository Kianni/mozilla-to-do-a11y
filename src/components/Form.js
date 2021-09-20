// import PropTypes from "prop-types";

function Form (){
    return(
    <form>  
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
            />
          </label>
        </h2>

        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}

// Form.propTypes = {
//     name: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     id: PropTypes.string.isRequired,
//   };

export default Form;