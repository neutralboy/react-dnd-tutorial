import { CSSProperties, FC, useState } from "react";
import { ConnectDragSource, useDrag } from "react-dnd";

import { itemTypes, ElementTypes } from "./types";

interface IBaseElement{ children: React.ReactNode, ref?: ConnectDragSource, style?: CSSProperties }
const BEStyle: CSSProperties = {
    border: "1px grey dashed",
    padding: "15px",
    margin: "5px",
    cursor: 'move'
}
export const BaseElement: FC<IBaseElement> = ({ children, ref, style }) => (
    <div ref={ref} style={{...BEStyle, ...style}}>
        {children}
    </div>
)

export const Field: FC = () => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: itemTypes.FIELD,
        item: {data: "", type: ElementTypes.InputField },
        canDrag: true,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    }));
    return (
        <div ref={drag}>
            <BaseElement style={{ opacity: isDragging ? 0.5 : 1 }}>
                <p>{itemTypes.FIELD}</p>
            </BaseElement>
        </div>
    );
}
