import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ProjectSide = function ({ projects }) {
  return (
    <div className="bg-stone-900 rounded-tr-2xl w-1/3  ">
      <div className="container flex flex-col md:pl-12 pl-6 py-10 pt-12 pr-6 md:pr-12 space-y-5 lg:space-y-10 ">
        <h1 className="uppercase font-bold mb-3 text-stone-50 lg:text-2xl lg:font-extrabold ">
          your projects
        </h1>
        <Link
          to="/newproject"
          className="rounded text-stone-300 hover:bg-stone-700 bg-stone-800 mb-3 py-2 px-3 w-fit lg:text-xl lg:px-6 lg:py-3"
        >
          + Add Project
        </Link>
        <ul className="flex flex-col space-y-2 lg:space-y-5 ">
          {projects.length
            ? projects.map((project) => (
                <Link key={project.title} to={`/${project.id}`}>
                  {" "}
                  <li className="text-stone-400 hover:text-white hover:bg-stone-700 rounded hover:cursor-pointer pl-1 py-1 w-30 lg:text-2xl">
                    {project.title}
                  </li>
                </Link>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSide;
