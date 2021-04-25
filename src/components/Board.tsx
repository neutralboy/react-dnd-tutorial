import {useContext} from "react";
import {DropTargetMonitor, useDrop} from "react-dnd";

import {Square, RenderPiece} from "./Square";
import {AppContext, canMoveKnight} from "./../context";
import {ItemTypes} from "./Knight";

interface IOverlay{
    color: string
}

const Overlay = ({ color }:IOverlay) => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color
            }}
        />
    )
}


const RenderSquare = (i: number) => {
    const {state, dispatch} = useContext(AppContext);

    const x = i % 8;
    const y = Math.floor(i/8)

    const black = (x + y)%2 === 1

    const [{isOver, canDrop}, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(state, [x, y]),
        drop: ()=> dispatch({ payload: [x,y] }),
        collect: (monitor: DropTargetMonitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    }, [x,y]);

    return (
        <div ref={drop} key={i} style={{ width: '100px', height: '100px', position: "relative" }} >
            <Square position={[x, y]} black={black}>
                { RenderPiece([x,y], state.knightPosition) }
            </Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    );
}


const Board = () => {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(RenderSquare(i))
      }
    return (
        <div style={{ width: "800px", height: "800px", display: "flex", flexWrap: "wrap", border: "3px solid black" }} >
            {squares}
        </div>
    )
}

export default Board;