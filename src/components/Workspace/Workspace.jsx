import "./style.css";
import Taskbar from "../Taskbar/Taskbar";
import Grid from "../Grid/Grid";
import Clock from "../Clock/Clock";
import Icons from "../Icons/Icons";
import Animation from "../Animation/Animation";

const Workspace = () => {

  return (
    <div className="container">
      <div className="card"></div>
      <Taskbar />
      <Icons />
      <div className="overlay"></div>
      <Grid />
    </div>
  );
};

export default Workspace;
