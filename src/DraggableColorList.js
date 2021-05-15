import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = ({colors, removeColor}) => {
  return (

    <div style={{ height: "100%"}}>
          {colors.map((color, index) => (
          <DraggableColorBox
            index={index}
            color={color.color}
            name={color.name}
            key={color.name}
            handleClick={() => removeColor(color.name)}
            />
          ))}
    </div>
  )
};

export default SortableContainer(DraggableColorList);