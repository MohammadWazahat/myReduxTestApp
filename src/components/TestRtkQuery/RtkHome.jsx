import { useState } from "react";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../../redux/features/apiSlice/apiSlice";

export default function Home() {
  const [newTask, setNewTask] = useState("");

  const [addTask] = useAddTaskMutation(); 
  console.log(addTask)

  
  const { data: tasksList, isError, isLoading, error } = useGetTasksQuery();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  console.log(isLoading)
console.log(tasksList)
console.log(isError)
console.log(error)

const handleSubmitForm =  (e) => {
    e.preventDefault();
    const task = {
      value: newTask,
      completed: false,
    };
    addTask(task);
    setNewTask("");
  }
 
  return (
    <div className="flex h-screen flex-grow items-start justify-center bg-gray-900 p-4">
      <div className="task-app w-full max-w-md rounded-lg bg-gray-800 px-6 pb-2 pt-6 text-gray-200 shadow-lg">
        <div className="mb-6 flex items-center">
         
          <h4 className="ml-3 text-lg font-semibold">My Tasks</h4>
        </div>

        {/* Adding the Todo */}
        <form
          onSubmit={handleSubmitForm}
          className="my-2 flex h-8 w-full items-center rounded border-2 border-solid border-gray-700 px-2 text-sm font-medium"
        >
        
          <input
            className="ml-4 h-8 w-full flex-grow bg-transparent font-medium focus:outline-none"
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            required
          />
          <button className="text-indigo-400">Add</button>
        </form>



        {/* reading the api part */}
        <div className="tasks-container overflow-auto">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : isError ? (
            <p className="text-center">
              {error.error || "Something went wrong"}
            </p>
          ) : (
            tasksList.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))
          )}
        </div>
      </div>
      {/* <Link to="contact" className="absolute text-gray-800 hover:text-gray-400">
        Contact
      </Link> */}
    </div>
  );
}
