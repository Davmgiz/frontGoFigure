import {React, useState} from "react";
import WorkArea from "./WorkArea";
import "./responsive/responsive.css"
import "./styles/Main.css"

// Main главная компонента приложения.
function Main() {

  // состоянии отвечающие на вопрос нажата ли в данный момент левая, правая кнопка мыши соответственно.
  const [isLeftDrawing, setIsLeftDrawing] = useState(false);
  const [isRightDrawing, setIsRightDrawing] = useState(false);

  // MouseDown обрабатывает нажатие кнопок мыши.
  function MouseDown(event){
    switch (event.button) {
      case 0:
        console.log('Нажата левая кнопка мыши');

        setIsLeftDrawing(true);
        setIsRightDrawing(false);
        break;
      case 2:
        console.log('Нажата правая кнопка мыши');

        setIsLeftDrawing(false);
        setIsRightDrawing(true);

        event.preventDefault();
        break;
      default:
    }
  }

  // MouseDown обрабатывает отпускание кнопок мыши.
  function MouseUp(event){
    switch (event.button) {
      case 0:
        console.log('Отпущена левая кнопка мыши');

        setIsLeftDrawing(false);
        setIsRightDrawing(false);
        break;
      case 2:
        console.log('Отпущена правая кнопка мыши');

        setIsLeftDrawing(false);
        setIsRightDrawing(false);

        event.preventDefault();
        break;
      default:
    }
  }

  return (
    <div className="Main"
      onMouseDown={MouseDown} // вызывает обработчик нажатий кнопок мыши.
      onMouseUp={MouseUp} // вызывает обработчик отпусканий кнопок мыши.
      onDragStart={(e) => e.preventDefault()} // отключение drag and drop для безостановочного рисования.
    >
      <WorkArea 
      isLeftDrawing={isLeftDrawing} // доносим данную переменную до компоненты пиксель.
      isRightDrawing={isRightDrawing} // доносим данную переменную до компоненты пиксель.
      />

    </div>
  );
}

export default Main;
