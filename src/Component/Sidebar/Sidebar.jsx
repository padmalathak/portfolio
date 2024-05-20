import { useState } from "react";
import "./Sidebar.scss";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar__bg">Links</div>
      <button className="button">Toggle</button>
    </div>
  );
}

export default Sidebar;
