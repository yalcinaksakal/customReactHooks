import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = tasksObj => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const { isLoading, error, sendRequest: fetchTasks } = useFetch(
    {
      url: "https://react-http-f069a-default-rtdb.firebaseio.com/tasks.json",
    },
    transformTasks
  );

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks f]);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
