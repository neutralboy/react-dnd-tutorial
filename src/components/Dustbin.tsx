import { CSSProperties } from "react";
import { useDrop } from "react-dnd";

import { Box, itemTypes } from "./Box";

const style: CSSProperties = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  }


const DustBin = () => {

    const [{canDrop, isOver}, drop] = useDrop({
        accept: itemTypes.BOX,
        drop: () => ({ name: "Dustbin" }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    })

    const isActive = isOver  && canDrop;
    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }  
    return(
        <div ref={drop} style={{ ...style, backgroundColor }}>
            { isActive ? "Release to Drop" : "Drag a box here" }
        </div>
    )
}

const rowStyle: CSSProperties = { overflow: 'hidden', clear: 'both' }

const Container = () => (
    <div>
        <div style={rowStyle}>
            <DustBin />
        </div>
        <div style={rowStyle}>
            <Box name="Glass" />
            <Box name="Banana" />
            <Box name="Paper" />
        </div>
    </div>
)

export default Container;