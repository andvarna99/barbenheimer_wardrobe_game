import React, {useState} from 'react';
import { DragDropContainer} from "react-drag-drop-container";
import hatPinkImage from ".//img/hat-pink.png";
import dressPinkImage from ".//img/dress-pink.png";
import heelPinkImage from ".//img/high-heel-pink.png";
import dress1 from ".//img/barbie dress 3.png";
import dress2 from ".//img/barbie dress 4.png";
// import dress3 from ".//img/barbie dress 3.png";
import shoe2 from ".//img/barbie shoe 2.png";
import shoe3 from ".//img/barbie shoe 3.png";
import hat1 from ".//img/barbie hat 1.png";
import hat2 from ".//img/barbie hat 2.png";
import murphyHat from ".//img/murphyHat.png";
import DraggableOutfit from "./DraggableOutfit";

export default function OutfitOptions({ displayStyle, setDisplayStyle, handleOutfitItemClick, setModelImage, isHatVisible, isDressVisible, isShoeVisible, selectedOutfit, setIsDressVisible, selectedHat, selectedDress, selectedShoe, setIsHatVisible, setIsShoeVisible, isWardrobeVisible, onOutfitDragEnd}) {
    return (
        <div className={`${isWardrobeVisible ? "wardrobe-visible" : "wardrobe-hidden"}`}>
            <div className={`clothes`} >
                {selectedOutfit === "hat" && isHatVisible && (
                    <>
                        <DraggableOutfit outfitType="hat1"
                                         outfitImage={hat1}
                                         selectedHat={selectedHat}
                                         selectedDress={selectedDress}
                                         selectedShoe={selectedShoe}
                                         isHatVisible={isHatVisible}
                                         isDressVisible={isDressVisible}
                                         isShoeVisible={isShoeVisible}
                                         setModelImage={setModelImage}
                                         setDisplayStyle={setDisplayStyle}
                                         displayStyle={displayStyle}
                        />
                        <DraggableOutfit outfitType="hat2"
                                         outfitImage={hat2}
                                         selectedHat={selectedHat}
                                         selectedDress={selectedDress}
                                         selectedShoe={selectedShoe}
                                         isHatVisible={isHatVisible}
                                         isDressVisible={isDressVisible}
                                         isShoeVisible={isShoeVisible}
                                         setModelImage={setModelImage}
                                         setDisplayStyle={setDisplayStyle}
                                         displayStyle={displayStyle}

                        />
                    </>
                )}
                {selectedOutfit === "dress" && isDressVisible && (
                    <>
                        <DraggableOutfit outfitType="dress1"
                                         outfitImage={dress1}
                                         selectedHat={selectedHat}
                                         selectedDress={selectedDress}
                                         selectedShoe={selectedShoe}
                                         isHatVisible={isHatVisible}
                                         isDressVisible={isDressVisible}
                                         isShoeVisible={isShoeVisible}
                                         setModelImage={setModelImage}
                                         setDisplayStyle={setDisplayStyle}
                                         displayStyle={displayStyle}
                        />
                        <DraggableOutfit outfitType="dress2"
                                         outfitImage={dress2}
                                         selectedHat={selectedHat}
                                         selectedDress={selectedDress}
                                         selectedShoe={selectedShoe}
                                         isHatVisible={isHatVisible}
                                         isDressVisible={isDressVisible}
                                         isShoeVisible={isShoeVisible}
                                         setModelImage={setModelImage}
                                         setDisplayStyle={setDisplayStyle}
                                         displayStyle={displayStyle}
                        />
                        {/*<DraggableOutfit outfitType="dress3"*/}
                        {/*                 outfitImage={dress3}*/}
                        {/*                 onOutfitDragEnd={onOutfitDragEnd}/>*/}
                    </>
                )}
                {selectedOutfit === "shoe" && isShoeVisible && (
                    <>
                        <DraggableOutfit outfitType="shoe3"
                                         outfitImage={shoe3}
                                         selectedHat={selectedHat}
                                         selectedDress={selectedDress}
                                         selectedShoe={selectedShoe}
                                         isHatVisible={isHatVisible}
                                         isDressVisible={isDressVisible}
                                         isShoeVisible={isShoeVisible}
                                         setModelImage={setModelImage}
                                         setDisplayStyle={setDisplayStyle}
                                         displayStyle={displayStyle}
                        />
                        <DraggableOutfit outfitType="shoe2"
                                         outfitImage={shoe2}
                                         selectedHat={selectedHat}
                                         selectedDress={selectedDress}
                                         selectedShoe={selectedShoe}
                                         setIsHatVisible={setIsHatVisible}
                                         setIsDressVisible={setIsDressVisible}
                                         setIsShoeVisible={setIsShoeVisible}
                                         setModelImage={setModelImage}
                                         setDisplayStyle={setDisplayStyle}
                                         displayStyle={displayStyle}
                        />
                    </>
                )}
            </div>
        </div>
    );
}