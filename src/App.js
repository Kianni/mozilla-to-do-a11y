import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";

function App({ subject }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Make it a11ble!</h1>
        <img src={logo} className="App-logo" alt="atom and electrons" />
      </header>
      <p role="main">Hello, {subject}!</p>
    </div>
  );
}
App.propTypes = {
  subject: PropTypes.string.isRequired,
};
export default App;
