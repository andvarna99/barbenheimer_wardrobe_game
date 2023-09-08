import React, {useState} from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

function DraggableOutfit({ displayStyle, setDisplayStyle, outfitType, outfitImage, setModelImage, isHatVisible, setIsDressVisible, setIsShoeVisible}) {
    return (
        <DragDropContainer
            targetKey="model"
            dragData={outfitType}
            payload={outfitType}
            onDragEnd={() => {
                // console.log("dropped");
                if(outfitType === "hat1"){
                    console.log("hat1 dropped");
                    // setDisplayStyle('none');
                    isHatVisible(false);
                } else if(outfitType === "hat2"){
                    console.log("hat2 dropped");
                    // setDisplayStyle('none');
                    isHatVisible(false);
                } else if(outfitType === "dress1"){
                    console.log("dress1 dropped");
                    setModelImage('barbie-2');
                    setDisplayStyle('none');
                    // setIsDressVisible(false);
                } else if(outfitType === "dress2"){
                    console.log("dress2 dropped");
                    setModelImage('barbie-3');
                    setDisplayStyle('none');
                    // setIsDressVisible(false);
                } else if(outfitType === "dress3"){
                    console.log("dress3 dropped");
                    setDisplayStyle('none');
                    // setModelImage('barbie-4');
                    // setIsDressVisible(false);
                } else if(outfitType === "shoe2"){
                    console.log("shoe2 dropped");
                    setDisplayStyle('none');

                    // setIsShoeVisible(false);
                } else if(outfitType === "shoe3"){
                    console.log("shoe3 dropped");
                    setDisplayStyle('none');
                    // setIsShoeVisible(false);
                }

            }
            }
        >
            {outfitType === `${outfitType}` ?
                <div>
                    <img className={outfitType} style={{ display: displayStyle }} src={outfitImage} alt={outfitType}/>
                </div> : ""}
        </DragDropContainer>
    );
}

export default DraggableOutfit;
