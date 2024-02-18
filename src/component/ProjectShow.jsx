import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProjectShow = function ({ projects, setProjects, saveToLS }) {
  const { id } = useParams();
  const [[currentProject], setCurrentProject] = useState(
    projects.filter((object) => object.id == id)
  );

  const currentTasksList = currentProject?.tasks;

  const [tasks, setTasks] = useState(currentTasksList);
  const task = useRef();

  useEffect(() => {
    const currentTasksList = currentProject?.tasks;
    setTasks(() => currentTasksList);
  }, [currentProject]);

  let updatedProject;
  let updatedProjectsArray = [];

  useEffect(() => {
    updatedProject = { ...currentProject, tasks: tasks };
    updatedProjectsArray = projects.map((project) => {
      if (project.id == id) {
        return updatedProject;
      } else {
        return project;
      }
    });
    setProjects(updatedProjectsArray);
    saveToLS(updatedProjectsArray);

    console.log(updatedProject, updatedProjectsArray);
  }, [tasks]);

    function handelAddTask() {
    let newTask = task.current.value;
    if (newTask !== "") {
      setTasks((prev) => [...prev, newTask]);
      task.current.value = "";
    }
  }


  useEffect(() => {
    setCurrentProject(projects.filter((object) => object.id == id));
  }, [id]);

  function handleDeletion() {
    updatedProjectsArray = projects.filter((project) => project.id != id);

    setProjects(updatedProjectsArray);
    saveToLS(updatedProjectsArray);
    console.log(updatedProjectsArray);
  }

  function handleClear() {
    setTasks("");
  }

  return (
    <div className="w-3/4">
      <div className="flex flex-col ml-10 mr-12 mt-12 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-stone-700">
            {currentProject?.title}
          </h1>
          <Link
            to="/"
            onClick={handleDeletion}
            className="text-stone-800 hover:text-red-700"
          >
            Delete
          </Link>
        </div>
        <p className="text-stone-500">{currentProject?.dueDate}</p>
        <p className="text-stone-800">{currentProject?.description} </p>
        <hr className=" border-1 border-stone-400" />
        <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
        <div className="felx space-x-4">
          <input
            ref={task}
            type="text"
            className="outline-stone-900 py-1 px-2 w-40 sm:w-60 md:w-80 rounded-md  bg-stone-300"
          />
          <button
            onClick={handelAddTask}
            className="text-stone-800 hover:text-stone-600"
          >
            Add Task
          </button>
        </div>
        {tasks.length ? (
          <div className="flex flex-col space-y-2 pb-2 relative bg-stone-200">
            {tasks?.map((task) => (
              <p key={task} className="text-stone-800 ml-4 mt-2 ">
                {task}
              </p>
            ))}
            {tasks ? (
              <button
                onClick={handleClear}
                className="text-stone-800 hover:text-red-700 absolute top-0 right-7"
              >
                Clear
              </button>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectShow;
