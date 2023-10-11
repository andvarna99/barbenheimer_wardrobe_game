import React, {useState} from 'react';
import dress1 from ".//img/barbie dress 3.png";
import dress2 from ".//img/barbie dress 4.png";
import shoe2 from ".//img/barbie shoe 2.png";
import shoe3 from ".//img/barbie shoe 3.png";
import hat1 from ".//img/barbie hat 1.png";
import hat2 from ".//img/barbie hat 2.png";
import murphyHat1 from ".//img/julias hat.png";
import murphyShirt1 from ".//img/julias shirt.png";
import murphyShoe1 from ".//img/julias shoes.png";
import ClickableOutfit from "./ClickableOutfit";

export default function OutfitOptions({ isBarbieClothesVisible, isMurphyClothesVisible, isMurphyHatVisible, isMurphyShirtVisible, isMurphyShoeVisible, isBarbieHatVisible, isBarbieDressVisible, isBarbieShoeVisible, setModelImage, displayStyle, handleOutfitItemClick, selectedOutfit, isDressVisible, selectedDress, isHatVisible, isShoeVisible, isWardrobeVisible, onOutfitDragEnd}) {
    return (
        <div className={`${isWardrobeVisible ? "wardrobe-visible" : "wardrobe-hidden"}`}>
            <div className={`clothes`} >
                <div className={`${isBarbieClothesVisible ? "barbie-clothes-visible" : "barbie-clothes-hidden"}`}>
                    { selectedOutfit === "hat" && isBarbieHatVisible && (
                        <>
                            <ClickableOutfit outfitType="hat1"
                                             outfitImage={hat1}
                                             setModelImage={setModelImage}
                                            />
                            <ClickableOutfit outfitType="hat2"
                                             outfitImage={hat2}
                                             setModelImage={setModelImage}/>
                        </>
                    )}
                    { selectedOutfit === "dress" && isBarbieDressVisible && (
                        <>
                            <ClickableOutfit outfitType="dress1"
                                             outfitImage={dress1}
                                             setModelImage={setModelImage}/>
                            <ClickableOutfit outfitType="dress2"
                                             outfitImage={dress2}
                                             setModelImage={setModelImage}/>
                        </>
                    )}
                    { selectedOutfit === "shoe" && isBarbieShoeVisible && (
                        <>
                            <ClickableOutfit outfitType="shoe3"
                                             outfitImage={shoe3}
                                             setModelImage={setModelImage}/>
                            <ClickableOutfit outfitType="shoe2"
                                             outfitImage={shoe2}
                                             setModelImage={setModelImage}/>
                        </>
                    )}
                </div>
                <div className={`${isMurphyClothesVisible ? "murphy-clothes-visible" : "murphy-clothes-hidden"}`}>
                    { selectedOutfit === "hat" && isMurphyHatVisible && (
                        <>
                            <ClickableOutfit outfitType="murphyHat1"
                                             outfitImage={murphyHat1}
                                             setModelImage={setModelImage}
                            />
                        </>
                    )}
                    { selectedOutfit === "dress" && isMurphyShirtVisible && (
                        <>
                            <ClickableOutfit outfitType="murphyShirt1"
                                             outfitImage={murphyShirt1}
                                             setModelImage={setModelImage}/>
                        </>
                    )}
                    { selectedOutfit === "shoe" && isMurphyShoeVisible && (
                        <>
                            <ClickableOutfit outfitType="murphyShoe1"
                                             outfitImage={murphyShoe1}
                                             setModelImage={setModelImage}/>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}