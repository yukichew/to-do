import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // dont't use double quotes for keys in JS objects.
  // use double quotes for keys in JSON

  // Tasks (To Do List) State
  const [toDo, setToDo] = useState([
    // title: task need to be add to the to do
    // false means task is incomplete, true means task is completed
    { id: 1, title: "Task 1", status: true },
    { id: 2, title: "Task 2", status: false },
  ]);

  // Temporary State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      // let newEntry = { id: num, title: newTask, status: false };
      // // ... allows us to quickly copy all or part of an existing array/obj into another array/obj.
      // setToDo([...toDo, newEntry]);
      // setNewTask("");

      setToDo([...toDo, { id: num, title: newTask, status: false }]);

      setNewTask("");
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    // filter method creates a new array called newTasks that contains all the tasks from the toDo array except the task with the specified id.
    // let newTasks = toDo.filter((task) => task.id !== id);
    // setToDo(newTasks);

    // refactored
    setToDo(toDo.filter((task) => task.id !== id));
  };

  // Mark task as done or completed
  const markDone = (id) => {
    // let newTask = toDo.map(task => {
    //   if (task.id === id) {
    //     return ({ ...task, status: !task.status })
    //   }
    //   return task;
    // })
    // setToDo(newTask);

    // refactored
    setToDo(
      toDo.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  // Cancel Update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for update
  const changeTask = (e) => {
    // let newEntry = {
    //   id: updateData.id,
    //   title: e.target.value,
    //   status: updateData.status ? true : false,
    // };
    // setUpdateData(newEntry);

    setUpdateData({
      ...updateData,
      title: e.target.value,
    });
  };

  // Update task
  const updateTask = () => {
    // let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    // let updatedObject = [...filterRecords, updateData];
    // setToDo(updatedObject);
    // setUpdateData("");

    let removeOldRecord = [...toDo].filter((task) => task.id !== updateData.id);
    setToDo([...removeOldRecord, updateData]);

    setUpdateData("");
  };

  const filteredTasks = () => {
    setToDo(toDo.filter((task) => task.status));
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App (React JS)</h2>
      <br />
      <br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          changeTask={changeTask}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? "" : "No Tasks..."}

      <Todo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />

      {/* <button onClick={filteredTasks} className="btn btn-lg btn-success mr-20">
        Show Completed Tasks
      </button> */}
    </div>
  );
}

export default App;
