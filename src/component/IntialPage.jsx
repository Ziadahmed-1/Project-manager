import img from "../assets/no-projects.png";
import { Link } from "react-router-dom";

const IntialPage = function () {
  return (
    <div className="w-3/4">
      <div className=" bg-stone-100 flex flex-col justify-center items-center space-y-6 mt-20">
        <img src={img} alt="note-book img" className="w-20 h-20 " />
        <h2 className="text-xl font-bold">No project Selected</h2>
        <p className="text-center">
          Select a project or get started with a new one
        </p>
        <Link
          to={"newproject"}
          className="bg-stone-900 hover:bg-stone-800  text-stone-300 p-3 rounded-lg"
        >
          Create new project
        </Link>
      </div>
    </div>
  );
};

export default IntialPage;
