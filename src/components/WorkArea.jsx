import React from "react";
import Drawer from "./Drawer";
import Info from "./Info";
import "./styles/WorkArea.css"

// WorkArea компонента рабочего пространства.
function WorkArea(props) {

  return (
    <div className="WorkArea">
        <Drawer 
        isLeftDrawing={props.isLeftDrawing}
        isRightDrawing={props.isRightDrawing}
        MouseUp={props.MouseUp}
        />
        <Info />
        
    </div>
  );
}

export default WorkArea;
