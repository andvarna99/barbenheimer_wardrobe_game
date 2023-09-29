import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

function DraggableOutfit({ displayStyle, setDisplayStyle, outfitType, outfitImage, setModelImage, isHatVisible, setIsDressVisible, setIsShoeVisible}) {
    return (
        <DragDropContainer
            targetKey="model"
            dragData={{outfitType}}
            payload={outfitType}
        >
            {outfitType === `${outfitType}` ?
                <div>
                    <img className={outfitType} style={{ display: displayStyle }} src={outfitImage} alt={outfitType}/>
                </div> : ""}
        </DragDropContainer>
    );
}

export default DraggableOutfit;
