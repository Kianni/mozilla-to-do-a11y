import PropTypes from "prop-types";

function FilterButton(props){
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>{props.mode}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    )
}

FilterButton.propTypes = {
    mode: PropTypes.string.isRequired
  };

export default FilterButton;