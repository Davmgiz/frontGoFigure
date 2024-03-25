import React, { useEffect, useState } from "react";
import "./styles/Pixel.css";

export const BLACK_VALUE = 255; // Значение черного цвета в наборе данных MNIST.
export const WHITE_VALUE = 0; // Значение белого цвета в наборе данных MNIST.

// Pixel компонента пиксель.
export function Pixel(props) {

  // value состояние цвета пикселя.
  const [value, setValue] = useState(props.value);

  // Обновление пикселя при обновлении его значения в компоненте Drawer.
  // Например, при полной отчистке экрана.  
  useEffect(() => {
  setValue(props.value);
  }, [props.value]);

  // handleMouseEnter обрабатывает ситуацию когда пиксель оказался под курсором с нажатой кнопкой.
  function handleMouseEnter() {

    // Нажата левая кнопка мыши.
    if (props.isLeftDrawing) {
      setValue(BLACK_VALUE);
      props.setCntBlack(props.cntBlack + 1);
      props.onUpdate(props.ind, BLACK_VALUE);

      // Нажата правая кнопка мыши.
    } else if (props.isRightDrawing) {
      setValue(WHITE_VALUE);
      props.setCntBlack(props.cntBlack - 1);
      props.onUpdate(props.ind, WHITE_VALUE);

    }
  }

  // handleLeftClick обрабатывает нажатие на пиксель левой кнопкой мыши
  function handleLeftClick() {
    setValue(BLACK_VALUE);
    props.setCntBlack(props.cntBlack + 1);
    props.onUpdate(props.ind, BLACK_VALUE);
  }

  // handleLeftClick обрабатывает нажатие на пиксель правой кнопкой мыши
  function handleRightClick(event) {

    // предотвращаем появление контекстного меню
    event.preventDefault();
    setValue(WHITE_VALUE);
    props.setCntBlack(props.cntBlack - 1);
    props.onUpdate(props.ind, WHITE_VALUE);
  }

  return (
    <div
      className="Pixel"

      // Устанавливает цвет пикселя исходя из его значения. 
      style={{ backgroundColor: value === WHITE_VALUE ? "#FFFFFF" : "#000000" }}
      
      // Левое нажатие мыши.
      onClick={handleLeftClick}

      // Левое нажатие мыши.
      onContextMenu={handleRightClick}

      // Пиксель оказался под курсором.
      onMouseEnter={handleMouseEnter}
    ></div>
  );
}



