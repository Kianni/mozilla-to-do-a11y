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

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
        
      }
      return task;
    });
    setTasks(updatedTasks);
    
  }

  const taskList = tasks.map( task => 
        <Todo name={task.name} 
              completed={task.completed} 
              id={task.id} 
              key={task.id}
              toggleTaskCompleted={toggleTaskCompleted}
        />
      );

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  
  return (
    <div className="todoapp stack-large" role="main">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>

      <div className="filters btn-group stack-exception">
        <FilterButton mode="All"/>
        <FilterButton mode="Active"/>
        <FilterButton mode="Completed"/>        
      </div>

      <h2 id="list-heading">{headingText}</h2>
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
