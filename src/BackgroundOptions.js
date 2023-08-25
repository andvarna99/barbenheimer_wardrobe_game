import React, {useState} from 'react';
import barbieIcon from ".//img/barbie_icon_2.png";
import murphyIcon from ".//img/nuke 1.png";
import barbieBackground from ".//img/Barbie_bg.png";


export default function ModelOptions() {
    const [activeBackgroundOptionsBtn, setActiveBackgroundOptionsBtn] = useState(null);

    const [isBarbieBtnHovered, setIsBarbieBtnHovered] = useState(false);
    const [isMurphyBtnHovered, setIsMurphyBtnHovered] = useState(false);

    function setBackgroundColorBarbie() {
        const barbieBackground = "barbieBackground";

    }

    return(
        <div className="background-options">
            <button className={`barbie-btn rounded-3 ${activeBackgroundOptionsBtn === "barbie-btn" ? "active" : isBarbieBtnHovered ? "hover" : ""}`}
                    style={{border: activeBackgroundOptionsBtn === "barbie-btn" ? '2px solid #E9609B' : isBarbieBtnHovered ? "2px solid #E9609B" : 'none',}}
                    onMouseEnter={() => setIsBarbieBtnHovered(true)}
                    onMouseLeave={() => setIsBarbieBtnHovered(false)}
                    onClick={() => {setActiveBackgroundOptionsBtn("barbie-btn");
                    setBackgroundColorBarbie()}
            }>
                <img className="barbie-icon"
                     src={barbieIcon}
                     alt={"barbie icon"}
                     ></img>
                <span className="barbie-btn-text">Barbie</span>
            </button>
            <button className={`murphy-btn rounded-3 ${activeBackgroundOptionsBtn === "murphy-btn" ? "active" : isMurphyBtnHovered ? "hover" : ""}`}
                    style={{border: activeBackgroundOptionsBtn === "murphy-btn" ? '2px solid #E9609B' : isMurphyBtnHovered ? "2px solid #E9609B" : 'none',}}
                    onMouseEnter={() => setIsMurphyBtnHovered(true)}
                    onMouseLeave={() => setIsMurphyBtnHovered(false)}
                    onClick={() => setActiveBackgroundOptionsBtn("murphy-btn")}>
                <img className="murphy-icon"
                        src={murphyIcon}
                        alt={"murphy icon"}></img>
                <span className="murphy-btn-text">Oppenheimer</span>
            </button>
        </div>
    )
}