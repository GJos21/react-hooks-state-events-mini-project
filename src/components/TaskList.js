import React from "react";
import Task from './Task'

function TaskList({ tasks, setTasks, catFilter = "All" }) {

  console.log("category filter=", catFilter)

  function handleDelete(taskText) {
    const newTasks = tasks
      .filter((task) => task.text !== taskText)
    setTasks([...newTasks])
  }

  return (
    <div className="tasks">
      {tasks
        .filter((task) => task.category === catFilter || catFilter === "All")
        .map(task => <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteItem={handleDelete}
          className="task"
        />)}
    </div>
  );
}

export default TaskList;
