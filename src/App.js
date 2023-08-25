import React, {useState} from 'react';
import OutfitOptions from './OutfitOptions';
import ModelOptions from './ModelOptions';
import BackgroundOptions from './BackgroundOptions';
import Footer from './Footer.js';
import './App.css';

function App() {
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);

    const [modelImage, setModelImage] = useState("barbie");
    const handleBarbieModelBtnClick = () => {
        setModelImage("barbie");
    }
    const handleMurphyModelBtnClick = () => {
        setModelImage("murphy");
    }

    const [backgroundImage, setBackgroundImage] = useState("barbie");
    const handleBarbieBgBtnClick = () => {
        setBackgroundImage("barbie");
    };
    const handleMurphyBgBtnClick = () => {
        setBackgroundImage("murphy");
    };

    return (
      <div className={`App ${backgroundImage}-bg`} >
          <div className="main-content">
              <div className="sidebar">
                  <div className="logo">
                  </div>
                  <OutfitOptions></OutfitOptions>
                  <ModelOptions onBarbieModelBtnClick={handleBarbieModelBtnClick}
                                onMurphyModelBtnClick={handleMurphyModelBtnClick}></ModelOptions>
                  <button className={`download-btn rounded-pill ${isDownloadHovered ? "hover" : ""}`}
                          type={"submit"}
                          onMouseEnter={() => setIsDownloadHovered(true)}
                          onMouseLeave={() => setIsDownloadHovered(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-download me-2" viewBox="0 0 16 16">
                          <path
                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                          <path
                              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                      </svg>
                      Download
                  </button>
                  <BackgroundOptions onBarbieBgBtnClick={handleBarbieBgBtnClick}
                                     onMurphyBgBtnClick={handleMurphyBgBtnClick}></BackgroundOptions>
                  <div className="dev-profile">
                      <div className="dev-profile-icon"></div>
                      <div className="dev-profile-text">
                          <h5 className="dev-header">Andrea Varnado</h5>
                          <p className="dev-header-text">Front-End Developer</p>
                      </div>
                  </div>
              </div>
              <div className={`model ${modelImage}-model`}>
              </div>
              <div className="wardrobe">
                  <div className="clothes">
                      <div className="dress_1">
                      </div>
                  </div>
              </div>
          </div>
          <Footer></Footer>
      </div>
  );
}

export default App;
