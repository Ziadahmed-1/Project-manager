import { useRef } from "react";
import { Link } from "react-router-dom";

const NewProject = function ({ projects, setProjects, saveToLS }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    if (
      title.current.value &&
      description.current.value &&
      dueDate.current.value
    ) {
      let newProject = {
        id: +projects.length,
        title: title.current.value,
        description: description.current.value,
        dueDate: dueDate.current.value,
        tasks: [],
      };
      if (projects.length) {
        saveToLS([...projects, newProject]);
        setProjects((prev) => {
          return [...prev, newProject];
        });
      } else {
        saveToLS([newProject]);
        setProjects(() => {
          return [newProject];
        });
      }

      clearInputFields();
    }
  }

  function clearInputFields() {
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = null;
  }

  return (
    <div className="w-3/4 ">
      <div className="mr-20 ml-10 mt-10 flex flex-col space-y-6">
        <div className="flex justify-end space-x-4">
          <Link to={"/"} className="text-stone-800 hover:text-amber-900">
            Cancel
          </Link>
          <button
            onClick={handleSave}
            className="text-stone-200 text-lg bg-stone-800 hover:bg-stone-700 rounded py-1 px-4 "
          >
            Save
          </button>
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-stone-800 font-bold">Title</label>
          <input
            ref={title}
            type="text"
            className="text-stone-800 bg-stone-300 py-1 outline-none focus:border-b-2 border-stone-800 rounded-md "
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-stone-800 font-bold">
            description
          </label>
          <input
            ref={description}
            type="text"
            className="text-stone-800 bg-stone-300 py-3 outline-none focus:border-b-2 border-stone-800 rounded-md "
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-stone-800 font-bold">due date</label>
          <input
            ref={dueDate}
            type="date"
            className="text-stone-800 bg-stone-300 py-1 outline-none focus:border-b-2 border-stone-800 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default NewProject;
