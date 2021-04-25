import React from "react";
// import {useContext} from "react";

// import {AppContext} from "./../context";
import {Knight} from "./Knight";

interface ISquare{
    black: boolean;
    children: React.ReactNode;
    position: number[];
}

const RenderPiece = (squarePosition: number[], knightPosition: number[]) => {
    if ( squarePosition[0] === knightPosition[0] && squarePosition[1] === knightPosition[1] ){
        return <Knight />
    }
}

const Square = ({ black, children, position }: ISquare) => {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return (
        <div
            style={{
            backgroundColor: fill,
            color: stroke,
            width: "100%",
            height: "100%"
            }} >
            {children}
        </div>
    )
}

export {Square, RenderPiece};