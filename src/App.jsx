import { useState } from "react";
import IntialPage from "./component/IntialPage";
import NewProject from "./component/NewProject";
import ProjectShow from "./component/ProjectShow";
import ProjectSide from "./component/ProjectSide";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  function saveToLS(value) {
    localStorage.setItem("projects", JSON.stringify(value));
  }
  const intial = JSON.parse(localStorage.getItem("projects"))?.length
    ? JSON.parse(localStorage.getItem("projects"))
    : [
        {
          id: 0,
          title: "dummy",
          description: "Lorem, ipsum dolor.",
          dueDate: "2024-2-14",
          tasks: ["Learn React", "Play video games"],
        },
      ];
  const [projects, setProjects] = useState(intial);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div className="flex w-screen h-screen bg-stone-100  mt-12">
              <ProjectSide projects={projects} /> <IntialPage />{" "}
            </div>
          }
        />
        <Route
          path="newproject"
          element={
            <div className="flex w-screen h-screen bg-stone-100  mt-12">
              <ProjectSide projects={projects} />
              <NewProject
                projects={projects}
                saveToLS={saveToLS}
                setProjects={setProjects}
              />
            </div>
          }
        />

        <Route
          path="/:id"
          element={
            <div className="flex w-screen h-screen bg-stone-100  mt-12">
              <ProjectSide projects={projects} />
              <ProjectShow
                saveToLS={saveToLS}
                projects={projects}
                setProjects={setProjects}
              />{" "}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
