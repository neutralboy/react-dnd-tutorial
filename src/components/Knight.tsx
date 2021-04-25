import {useDrag, DragSourceMonitor} from "react-dnd";

const ItemTypes = {
    KNIGHT: "knight"
}

const Knight = () => {

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.KNIGHT,
        canDrag: true,
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

return (
        <span ref={drag} style={{ fontSize: "75px", paddingLeft: "10px", cursor: "move", opacity: isDragging ? 0.5 : 1 }}>♘</span>
    )
}

export {
    Knight,
    ItemTypes
};