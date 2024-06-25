import React, { useState, useEffect } from "react";
import axios from "axios";

function Todos() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function getTasks() {
      const response = await axios.get("/api/tasks/get/");
      // console.log(response.data);
      setTasks(response.data);
    }
    getTasks();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>Due</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => {
            return (
              <tr key={task.id}>
                <td>{idx + 1}</td>
                <td>{task.task}</td>
                <td>{task.due}</td>
                <td>{task.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
