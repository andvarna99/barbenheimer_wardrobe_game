import React, { useRef, useState} from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Wardrobe from "./Wardrobe";
import OutfitOptions from './OutfitOptions';
import ModelOptions from './ModelOptions';
import BackgroundOptions from './BackgroundOptions';
import Footer from './Footer.js';
import './App.css';
import { DropTarget } from "react-drag-drop-container";


const getScreenshot = async (ref, width, height) => {
    const canvas = await html2canvas(ref.current, { width, height });
    return canvas.toDataURL("image/png");
};
const getPDF = async (ref, width, height) => {
    const screenshot = await getScreenshot(ref, width, height);
    const pdf = new jsPDF("landscape", "mm", [width, height]);
    pdf.addImage(screenshot, "PNG", 0, 0, width, height);
    return pdf;
};

function App() {
    const appRef = useRef(null);

    const [isVisible, setIsVisible] = useState(true);
    const [isDressVisible, setIsDressVisible] = useState(true);
    const [isHatVisible, setIsHatVisible] = useState(true);
    const [isShoeVisible, setIsShoeVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isWardrobeVisible, setIsWardrobeVisible] = useState(true);

    const [selectedOutfit, setSelectedOutfit] = useState(null);
    const [modelImage, setModelImage] = useState("barbie");
    const [backgroundImage, setBackgroundImage] = useState("barbie");
    const [displayStyle, setDisplayStyle] = useState('block');

    const [selectedHat, setSelectedHat] = useState(null);
    const [selectedDress, setSelectedDress] = useState(null);
    const [selectedShoe, setSelectedShoe] = useState(null);

    const resetOutfitVisibility = () => {
        // window.location.reload();
        setDisplayStyle("block");
        console.log("reset outfits");
    };

    const handleOutfitClick = (outfitType) => {
        setSelectedOutfit(outfitType);
    };
    const handleOutfitItemClick = (outfitType) => {
        if (outfitType === 'hat') {
            setSelectedHat(outfitType);
        } else if (outfitType === 'dress') {
            setSelectedDress(outfitType);
        } else if (outfitType === 'shoe') {
            setSelectedShoe(outfitType);
        }
    };
    const handleBarbieModelBtnClick = () => {
        setModelImage("barbie");
    }
    const handleMurphyModelBtnClick = () => {
        setModelImage("murphy");
    }
    const handleBarbieBgBtnClick = () => {
        setBackgroundImage("barbie");
    };
    const handleMurphyBgBtnClick = () => {
        setBackgroundImage("murphy");
    };

    const handleOnDrop = (outfitType) => {
        if (outfitType === "hat") {
            setIsHatVisible(false);
        }else if (outfitType === "dress") {
            setIsHatVisible(false);
        } else if (outfitType === "shoe") {
            setIsHatVisible(false);
        }
    }

    const handleGetPDF = async () => {
        setIsSidebarVisible(false);
        setIsWardrobeVisible(false)

        const width = 1920;
        const height = 1080;

        const canvas = await html2canvas(appRef.current, { width, height });
        const screenshot = canvas.toDataURL('image/png');
        const pdf = await getPDF(appRef, width, height);

        pdf.save('app.pdf');

        setIsSidebarVisible(true);
        setIsWardrobeVisible(true);
    };

    return (
      <div className={`App ${backgroundImage}-bg `} ref={appRef}>
          <div className={`main-content`}>
              <div className={`col-lg-4 sidebar ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
                  <div className="logo">
                  </div>
                  <OutfitOptions selectedHat={selectedHat}
                                 selectedDress={setSelectedDress}
                                 selectedShoe={selectedShoe}
                                 isDressVisible={setIsDressVisible}
                                 isHatVisible={setIsHatVisible}
                                 isShoeVisible={setIsShoeVisible}
                                 onOutfitOptionsClick={handleOutfitClick}></OutfitOptions>
                  <ModelOptions onBarbieModelBtnClick={handleBarbieModelBtnClick}
                                onMurphyModelBtnClick={handleMurphyModelBtnClick}
                                onDownloadClick={handleGetPDF}
                                resetOutfitVisibility={resetOutfitVisibility}></ModelOptions>
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
              <DropTarget targetKey={"model"}
                          dropData={"clothes"}
                          style={"width:400px;"}
                          onHit={ (outfitType) => {
                              if(outfitType === "hat1"){
                              console.log("hat1 dropped");
                              setModelImage("hat-1");
                              // setDisplayStyle('none');
                              // isHatVisible(false);
                          } else if(outfitType === "hat2"){
                              console.log("hat2 dropped");
                              setModelImage("hat-2");
                              // setDisplayStyle('none');
                              // isHatVisible(false);
                          } else if(outfitType === "dress1"){
                              console.log("dress1 dropped");
                              setModelImage('barbie-2');
                              // setDisplayStyle('none');
                              // setIsDressVisible(false);
                          } else if(outfitType === "dress2"){
                              console.log("dress2 dropped");
                              setModelImage('barbie-3');
                              // setDisplayStyle('none');
                              // setIsDressVisible(false);
                          } else if(outfitType === "dress3"){
                              console.log("dress3 dropped");
                              // setDisplayStyle('none');
                              // setModelImage('barbie-4');
                              // setIsDressVisible(false);
                          } else if(outfitType === "shoe2"){
                              console.log("shoe2 dropped");
                              // setDisplayStyle('none');
                              setModelImage("shoe-2");
                              // setIsShoeVisible(false);
                          } else if(outfitType === "shoe3"){
                              console.log("shoe3 dropped");
                              setModelImage("shoe-3");
                              // setDisplayStyle('none');
                              // setIsShoeVisible(false);
                          }
                        }
                    }
              >
                  <div className={`col-lg-4 model ${modelImage}-model`}>
                  </div>
              </DropTarget>
              <Wardrobe selectedOutfit={selectedOutfit}
                        setModelImage={setModelImage}
                        isWardrobeVisible={isWardrobeVisible}
                        isDressVisible={isDressVisible}
                        isHatVisible={isHatVisible}
                        isShoeVisible={isShoeVisible}
                        setIsDressVisible={setIsDressVisible}
                        setIsHatVisible={setIsHatVisible}
                        setIsShoeVisible={setIsShoeVisible}
                        selectedShoe={selectedShoe}
                        selectedHat={selectedHat}
                        selectedDress={selectedDress}
                        handleOutfitItemClick={handleOutfitItemClick}
                        setDisplayStyle={setDisplayStyle}
                        displayStyle={displayStyle}
                        >

              </Wardrobe>
          </div>
          {/*<Footer></Footer>*/}
      </div>
  );
}

export default App;
