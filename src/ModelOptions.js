import React, {useState} from 'react';


export default function ModelOptions({resetOutfitVisibility, onBarbieModelBtnClick, onMurphyModelBtnClick, onDownloadClick}) {
    const [activeModelOptionsBtn, setActiveModelOptionsBtn] = useState("barbie-model-selector");

    const [isDownloadHovered, setIsDownloadHovered] = useState(false);
    const [isBarbieProfileHovered, setIsBarbieProfileHovered] = useState(false);
    const [isMurphyProfileHovered, setIsMurphyProfileHovered] = useState(false);

    return (
        <div className="model-options">
            <button className={`barbie-model-selector row ${activeModelOptionsBtn === "barbie-model-selector" ? "active" : isBarbieProfileHovered ? "hover" : ""}`}
                    type={"submit"}
                    onMouseEnter={() => setIsBarbieProfileHovered(true)}
                    onMouseLeave={() => setIsBarbieProfileHovered(false)}
                    onClick={() => {
                        setActiveModelOptionsBtn("barbie-model-selector");
                        onBarbieModelBtnClick();
                        resetOutfitVisibility();
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
                        resetOutfitVisibility();
                    }}>
                <div className="murphy-profile "
                     style={{border: activeModelOptionsBtn === "murphy-model-selector" ? '2px solid #E9609B' : isMurphyProfileHovered ? "2px solid #E9609B" : 'none',}}></div>
                <div className="murphy-profile-text col">
                    <h5 className="murphy-header">Julius</h5>
                    <p className="murphy-header-text">This Ken's job is bomb...</p>
                </div>
            </button>
            <button className={`download-btn rounded-pill ${isDownloadHovered ? "hover" : ""}`}
                    type={"submit"}
                    onMouseEnter={() => setIsDownloadHovered(true)}
                    onMouseLeave={() => setIsDownloadHovered(false)}
                    onClick={onDownloadClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-download me-2" viewBox="0 0 16 16">
                    <path
                        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path
                        d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                Download
            </button>
        </div>
    )
}
