import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { useEffect } from "react";

const ListTask = () => {
  const { tasks, select } = useSelector((state) => state);
  const [filterTasks, setFilterTasks] = useState(tasks);
  useEffect(() => {
    setFilterTasks(
      tasks.filter((task) =>
        select == "true" ? task.isDone : select == "false" ? !task.isDone : task
      )
    );
  }, [select, tasks]);

  return (
    <div className="row gap-5">
      {filterTasks.map((task, index) => (
        <Task {...task} key={index} />
      ))}
    </div>
  );
};

export default ListTask;
