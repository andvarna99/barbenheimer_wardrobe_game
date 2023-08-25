import React, {useState} from 'react';


export default function ModelOptions({onBarbieModelBtnClick, onMurphyModelBtnClick}) {
    const [activeModelOptionsBtn, setActiveModelOptionsBtn] = useState(null);

    const [isBarbieProfileHovered, setIsBarbieProfileHovered] = useState(false);
    // const [isBarbieProfileClicked, setIsBarbieProfileClicked] = useState(false);
    const [isMurphyProfileHovered, setIsMurphyProfileHovered] = useState(false);
    // const [isMurphyProfileClicked, setIsMurphyProfileClicked] = useState(false);

    return (
        <div className="model-options">
            <button className={`barbie-model-selector row ${activeModelOptionsBtn === "barbie-model-selector" ? "active" : isBarbieProfileHovered ? "hover" : ""}`}
                    type={"submit"}
                    onMouseEnter={() => setIsBarbieProfileHovered(true)}
                    onMouseLeave={() => setIsBarbieProfileHovered(false)}
                    onClick={() => {
                        setActiveModelOptionsBtn("barbie-model-selector");
                        onBarbieModelBtnClick();
                    }}>
                <div className="barbie-profile" style={{border: activeModelOptionsBtn === "barbie-model-selector" ? '2px solid #E9609B' : isBarbieProfileHovered ? "2px solid #E9609B" : 'none',}}></div>
                <div className="barbie-profile-text col">
                    <h5 className="barbie-header">Barbie</h5>
                    <p className="barbie-header-text ">Ask your mother...</p>
                </div>
            </button>
            <button className={`murphy-model-selector row ${activeModelOptionsBtn === "murphy-model-selector" ? "active" : isMurphyProfileHovered ? "hover" : ""}`}
                    type={"submit"}
                    onMouseEnter={() => setIsMurphyProfileHovered(true)}
                    onMouseLeave={() => setIsMurphyProfileHovered(false)}
                    onClick={() => {
                        setActiveModelOptionsBtn("murphy-model-selector");
                        onMurphyModelBtnClick();
                    }}>
                <div className="murphy-profile "
                     style={{border: activeModelOptionsBtn === "murphy-model-selector" ? '2px solid #E9609B' : isMurphyProfileHovered ? "2px solid #E9609B" : 'none',}}></div>
                <div className="murphy-profile-text col">
                    <h5 className="murphy-header">Murphy</h5>
                    <p className="murphy-header-text">This Ken's job is bomb...</p>
                </div>
            </button>
        </div>
    )
}
