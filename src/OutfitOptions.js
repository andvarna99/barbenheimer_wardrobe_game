import React, {useState} from 'react';
import hatGreyImage from ".//img/hat-grey.png";
import hatLightPinkImage from ".//img/hat-light-pink.png";
import hatPinkImage from ".//img/hat-pink.png";
import dressGreyImage from ".//img/dress-grey.png";
import dressLightPinkImage from ".//img/dress-light-pink.png";
import dressPinkImage from ".//img/dress-pink.png";
import heelGreyImage from ".//img/high-heel-grey.png";
import heelLightPinkImage from ".//img/high-heel-light-pink.png";
import heelPinkImage from ".//img/high-heel-pink.png";

export default function OutfitOptions({onOutfitOptionsClick, selectedHat, selectedDress, selectedShoe, isHatVisible, isShoeVisible, isDressVisible}) {
    const [activeOutfitOptionsBtn, setActiveOutfitOptionsBtn] = useState(null);

    const [isHatHovered, setIsHatHovered] = useState(false);
    const [isDressHovered, setIsDressHovered] = useState(false);
    const [isHeelHovered, setIsHeelHovered] = useState(false);

    const hatTextColor = activeOutfitOptionsBtn === "hat" ? "#E9609B" : isHatHovered ? "#FFD7EE" : "#AAA";
    const dressTextColor = activeOutfitOptionsBtn === "dress" ? "#E9609B" : isDressHovered ? "#FFD7EE" : "#AAA";
    const heelTextColor = activeOutfitOptionsBtn === "shoe" ? "#E9609B" : isHeelHovered ? "#FFD7EE" : "#AAA";

    return (
        <div className="outfit-options">
            <button
                className={`hats row container ${activeOutfitOptionsBtn === "hat" ? "active" : isHatHovered ? "hover" : ""}`}
                type={"submit"}
                onMouseEnter={() => setIsHatHovered(true)}
                onMouseLeave={() => setIsHatHovered(false)}
                onClick={() => {
                    setActiveOutfitOptionsBtn("hat");
                    console.log("hat btn clicked");
                    onOutfitOptionsClick("hat");
                    isHatVisible(true);
                    // selectedHat(activeOutfitOptionsBtn === "hat" ? null : "hat");
                }}
            >
                <i className="hat-icon"
                   style={{
                       backgroundImage: `url(${
                           activeOutfitOptionsBtn === "hat"
                               ? hatPinkImage
                               : isHatHovered
                                   ? hatLightPinkImage
                                   : hatGreyImage
                       })`,
                   }}></i>
                <p className="hat-text m-0 col-2"
                   style={{color: hatTextColor}}>Hats</p>
            </button>
            <button
                className={`outfits row container ${activeOutfitOptionsBtn === "dress" ? "active" : isDressHovered ? "hover" : ""}`}
                type={"submit"}
                onMouseEnter={() => setIsDressHovered(true)}
                onMouseLeave={() => setIsDressHovered(false)}
                onClick={() => {
                    setActiveOutfitOptionsBtn("dress");
                    console.log("dress btn clicked");
                    onOutfitOptionsClick("dress");
                    // // onOutfitOptionsClick(onOutfitOptionsClick);
                    // // onOutfitOptionsClick(selectedDress === 'outfits-1' || selectedDress === 'outfits-2' || selectedDress === 'outfits-3' ? null : 'outfits-1');
                    // selectedDress(activeOutfitOptionsBtn === "dress" ? null : "dress");
                    isDressVisible(true);

                }}>
                <i className="outfit-icon"
                   style={{
                       backgroundImage: `url(${
                           activeOutfitOptionsBtn === "dress"
                               ? dressPinkImage
                               : isDressHovered
                                   ? dressLightPinkImage
                                   : dressGreyImage
                       })`,
                   }}></i>
                <p className="outfit-text col-2" style={{color: dressTextColor}}>Outfits</p>
            </button>
            <button
                className={`shoes row container ${activeOutfitOptionsBtn === "shoe" ? "active" : isHeelHovered ? "hover" : ""}`}
                type={"submit"}
                onMouseEnter={() => setIsHeelHovered(true)}
                onMouseLeave={() => setIsHeelHovered(false)}
                onClick={() => {
                    setActiveOutfitOptionsBtn("shoe");
                    onOutfitOptionsClick("shoe");
                    // selectedShoe(activeOutfitOptionsBtn === "shoe" ? null : "shoe");
                    isShoeVisible(true);
                    console.log("shoe btn clicked");
                }}>
                <i className="shoe-icon"
                   style={{
                       backgroundImage: `url(${
                           activeOutfitOptionsBtn === "shoe"
                               ? heelPinkImage
                               : isHeelHovered
                                   ? heelLightPinkImage
                                   : heelGreyImage
                       })`,
                   }}></i>
                <p className="shoe-text col-2" style={{color: heelTextColor}}>Shoes</p>
            </button>
        </div>
    )
}
