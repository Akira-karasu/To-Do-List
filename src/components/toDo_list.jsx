import deleteIcon from '../assets/images/bin.png';
import React, { useState } from "react";

function ToDo_list() {
    const [newTask, setNewtask] = useState("");
    const [task, setTask] = useState([]);

    function handleInputChange(event) {
        setNewtask(event.target.value);
    }

    function Add_list() {
        if (newTask.trim() === "") return;
        setTask([...task, { text: newTask.trim(), completed: false }]);
        setNewtask("");
    }

    function Delete_list(indexToDelete) {
        setTask(task.filter((_, index) => index !== indexToDelete));
    }

    function Check_list(indexToToggle) {
        const updatedTasks = task.map((t, index) =>
            index === indexToToggle ? { ...t, completed: !t.completed } : t
        );
        setTask(updatedTasks);
    }

    return (
        <div className="toDo_list">
            <h1>To-Do List</h1>
            <ul className="list">
                {task.map((taskItem, index) => (
                    <li key={index}>
                        <div className="toDo d-flex justify-content-between align-items-center mb-2 p-3 border border-2 border-white rounded">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={taskItem.completed}
                                onChange={() => Check_list(index)}
                            />
                            <span>
                                <p className={`m-0 text-white ${taskItem.completed ? 'text-decoration-line-through' : ''}`}>
                                    {taskItem.text}
                                </p>
                            </span>
                            <div>
                                <button className="btn btn-light" onClick={() => Delete_list(index)}>
                                    <img src={deleteIcon} aria-label="Delete" alt="delete icon" height={20} width={20} />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-around p-3 gap-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="To Do"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="btn btn-light" onClick={Add_list}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default ToDo_list;
