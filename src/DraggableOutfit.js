import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { useDrag } from 'react-dnd';

function DraggableOutfit({ outfitType, outfitImage, onOutfitDragEnd}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'OUTFIT',
        item: { outfitType },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div>
            {outfitType === `${outfitType}` ?
                <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
                    <img className={outfitType} src={outfitImage} alt={outfitType}/>
                </div> : ""}
        </div>
    );
}

export default DraggableOutfit;
