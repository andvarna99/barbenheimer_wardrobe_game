import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

function DraggableOutfit({ outfitType, outfitImage, onOutfitDragEnd}) {
    return (
        <DragDropContainer
            targetKey="model"
            dragData={outfitType}
            payload={outfitType}
            onDragEnd={onOutfitDragEnd}
        >
            {outfitType === `${outfitType}` ?
                <div>
                    <img className={outfitType} src={outfitImage} alt={outfitType}/>
                </div> : ""}
        </DragDropContainer>
    );
}

export default DraggableOutfit;
