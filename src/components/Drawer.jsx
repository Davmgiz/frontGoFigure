import {React, useState, useEffect} from "react";
import {Pixel, WHITE_VALUE, BLACK_VALUE}  from "./Pixel";
import Pred from "./Pred";
import "./styles/Drawer.css"

// Drawer компонента окна для рисования
function Drawer(props) {
  const rows = 28; // количество строк из пикселей
  const columns = 28; // количество пикселей в строке

  let firstPixelsValues = [];
  for (let i = 0; i < rows * columns; i++){
    firstPixelsValues.push({value: WHITE_VALUE});
  }

  // pixels состояние значений всех пикселей.
  const [pixels, setPixels] = useState(firstPixelsValues);

  // countBlack состояние количества активных черных пикселей на экране.
  const [countBlack, setCountBlack] = useState(0);

  // updatePixels обновление состояния значения конкретного пикселя.
  function updatePixels(index, value){
    const updatedPixels = [...pixels];
    if (updatedPixels[index].value !== value){
      updatedPixels[index] = {value: value};
      setPixels(updatedPixels);
    }
  }

  // отправка GET запроса
  useEffect(() => {
    // Нет пикселей черного цвета
    if (countBlack == 0){

    } else {

    }
    console.log(pixels);
    console.log(countBlack)
  }, [pixels]);

  // clearScreen функция полной отчистки экрана.
  function clearScreen() {
    setPixels(pixels.map(pixel => ({ value: WHITE_VALUE })));
    setCountBlack(0);
  }

  return (
    <div className="Drawer">
      <Pred />
      <div className="DrawArea" >
        {pixels.map((el, i) => (
          <Pixel 
          key={i} 
          ind={i} 
          value={el.value} 
          onUpdate={updatePixels}
          isLeftDrawing={props.isLeftDrawing}
          isRightDrawing={props.isRightDrawing}
          setCntBlack={setCountBlack}
          cntBlack={countBlack}
        />
      ))}
      </div>
      <button className="Clear" onClick={clearScreen}>Clear</button>
    </div>
  );
}

export default Drawer;
