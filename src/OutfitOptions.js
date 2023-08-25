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

export default function OutfitOptions() {
    const [activeOufitOptionsBtn, setActiveOufitOptionsBtn] = useState(null);

    const [isHatHovered, setIsHatHovered] = useState(false);
    const [isDressHovered, setIsDressHovered] = useState(false);
    const [isHeelHovered, setIsHeelHovered] = useState(false);

    const hatTextColor = activeOufitOptionsBtn === "hats" ? "#E9609B" : isHatHovered ? "#FFD7EE" : "#AAA";
    const dressTextColor = activeOufitOptionsBtn === "outfits" ? "#E9609B" : isDressHovered ? "#FFD7EE" : "#AAA";
    const heelTextColor = activeOufitOptionsBtn === "shoes" ? "#E9609B" : isHeelHovered ? "#FFD7EE" : "#AAA";

    return (
        <div className="outfit-options">
            <button
                className={`hats row container ${activeOufitOptionsBtn === "hats" ? "active" : isHatHovered ? "hover" : ""}`}
                type={"submit"}
                onMouseEnter={() => setIsHatHovered(true)}
                onMouseLeave={() => setIsHatHovered(false)}
                onClick={() => setActiveOufitOptionsBtn("hats")}
            >
                <i className="hat-icon"
                   style={{
                       backgroundImage: `url(${
                           activeOufitOptionsBtn === "hats"
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
                className={`outfits row container ${activeOufitOptionsBtn === "outfits" ? "active" : isDressHovered ? "hover" : ""}`}
                type={"submit"}
                onMouseEnter={() => setIsDressHovered(true)}
                onMouseLeave={() => setIsDressHovered(false)}
                onClick={() => setActiveOufitOptionsBtn("outfits")}>
                <i className="outfit-icon"
                   style={{
                       backgroundImage: `url(${
                           activeOufitOptionsBtn === "outfits"
                               ? dressPinkImage
                               : isDressHovered
                                   ? dressLightPinkImage
                                   : dressGreyImage
                       })`,
                   }}></i>
                <p className="outfit-text col-2" style={{color: dressTextColor}}>Outfits</p>
            </button>
            <button
                className={`shoes row container ${activeOufitOptionsBtn === "shoes" ? "active" : isHeelHovered ? "hover" : ""}`}
                type={"submit"}
                onMouseEnter={() => setIsHeelHovered(true)}
                onMouseLeave={() => setIsHeelHovered(false)}
                onClick={() => setActiveOufitOptionsBtn("shoes")}>
                <i className="shoe-icon"
                   style={{
                       backgroundImage: `url(${
                           activeOufitOptionsBtn === "shoes"
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
