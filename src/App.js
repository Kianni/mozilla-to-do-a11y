import { useState } from "react";
import PropTypes from "prop-types";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";


function App(props) {
  //console.log(props);
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks.map( task => 
        <Todo name={task.name} 
              completed={task.completed} 
              id={task.id} 
              key={task.id}/>);

  return (
    <div className="todoapp stack-large" role="main">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>

      <div className="filters btn-group stack-exception">
        <FilterButton mode="All"/>
        <FilterButton mode="Active"/>
        <FilterButton mode="Completed"/>        
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}

      </ul>
    </div>
  );
}
App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
export default App;
