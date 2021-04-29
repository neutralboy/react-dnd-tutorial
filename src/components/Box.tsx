import { CSSProperties, FC } from "react";
import { useDrag } from "react-dnd";

const itemTypes = {
    BOX: 'box'
}

const style: CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

interface IBox{
    name: string
}

interface DropResult{ name: string }

const Box: FC<IBox> = ({ name }) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: itemTypes.BOX,
        item: { name },
        end: ( item, monitor ) => {
            const dropResult = monitor.getDropResult<DropResult>()
            if (item && dropResult){
                alert(` You dropped ${item.name} to ${dropResult.name} `)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        })
    }));
    const opacity: number = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{...style, opacity}}>
            {name}
        </div>
    )
}

export {
    itemTypes,
    Box
}