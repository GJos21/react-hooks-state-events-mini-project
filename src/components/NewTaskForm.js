import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({ text: "", category: "Code", })

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask)
  }

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setNewTask({ ...newTask, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categories
            .filter((category) => category !== "All")
            .map((category) => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
