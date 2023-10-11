import React from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { useDrag } from 'react-dnd';

function ClickableOutfit({ setModelImage, outfitType, outfitImage }) {
    console.log('setModelImage prop:', setModelImage);

    return (
        <div >
            <div>
                <img onClick={ () => {
                    if ( outfitType === "hat1" ) {
                        console.log("hat 1 selected");
                        setModelImage('barbie-hat-1');
                    } else if ( outfitType === "hat2" ) {
                        console.log("hat 2 selected");
                        setModelImage('barbie-hat-2');
                    } else if ( outfitType === "dress1" ) {
                        console.log("dress 1 selected");
                        setModelImage('barbie-dress-2');
                    } else if ( outfitType === "dress2" ) {
                        console.log("dress 2 selected");
                        setModelImage('barbie-dress-3');
                    } else if ( outfitType === "shoe2" ) {
                        console.log("shoe 2 selected");
                        setModelImage('barbie-shoe-2');
                    } else if ( outfitType === "shoe3" ) {
                        console.log("shoe 3 selected");
                        setModelImage('barbie-shoe-3');
                    } else if ( outfitType === "murphyHat1" ) {
                        console.log("murphy hat 1 selected");
                        setModelImage('murphy-hat-1');
                    } else if ( outfitType === "murphyShirt1" ) {
                        console.log("murphy shirt 1 selected");
                        setModelImage('murphy-shirt-1');
                    } else if ( outfitType === "murphyShoe1" ) {
                        console.log("murphy shoe 1 selected");
                        setModelImage('murphy-shoe-1');
                    }
                }}
                     className={outfitType}
                     src={outfitImage}
                     alt={outfitType}
                     // style={{ display: displayStyle }}
                />
            </div>
        </div>
    );
}

export default ClickableOutfit;
