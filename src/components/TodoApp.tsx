import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Math.random(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1 className="text-2xl text-gray-500 font-bold my-5">Todo List</h1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          placeholder="Add new task"
          className="border py-2 px-4"
        />
        <button className="py-2 px-4 bg-gray-500 text-white" onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li className="grid grid-cols-1 md:grid-cols-[_1fr_300px_300px] gap-4 my-4" key={task.id}>
            <span className={`border py-2 px-4 ${task.completed ? "line-through" : ""}`}>{task.text}</span>
            <button className="py-2 px-4 bg-blue-500 text-white" onClick={() => toggleTask(task.id)}>Toggle</button>
            <button className="py-2 px-4 bg-green-500 text-white" onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
