import { FC, useState } from "react";
import { useDrop } from "react-dnd";

import { Field } from "./elements";
import { RenderBaseElement, InputField } from "./renderElements";
import { itemTypes, ElementTypes } from "./types";


interface IState{
    data: string
    type: ElementTypes
}

const StateSave: FC = () => {
    const [elemList, setElemList] = useState<IState[]>([]);
    const [{ isOver }, drop] = useDrop({
        accept: [itemTypes.FIELD, itemTypes.ROW],
        drop: (item: any ) => {setElemList(e=>[...e, item]);},
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    })
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div style={{
                width: '500px',
                border: '2px black solid',
                padding: '10px',
                margin: '10px',
                textAlign: 'center'
            }}>
                <p>Drag from here</p>
                <div style={{
                    textAlign: 'left'
                }}>
                    <Field />  
                </div>
            </div>
            <div ref={drop} style={{
                width: '500px',
                border:  isOver ? '2px grey dashed' : '2px black solid',
                backgroundColor: isOver ? 'yellowgreen' : 'inherit',
                padding: '10px',
                margin: '10px',
                textAlign: 'center'
            }}>
                <p>Drop here</p>
                <div>
                    {
                        elemList.map(e=>
                            <RenderBaseElement key={Math.random()} >
                                { e.type === ElementTypes.InputField && <InputField data={e.data} /> }
                            </RenderBaseElement>
                            )
                    }
                </div>
            </div>
        </div>
    )
};

export default StateSave;