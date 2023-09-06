import React, {useEffect, useRef, useState} from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Wardrobe from "./Wardrobe";
import OutfitOptions from './OutfitOptions';
import ModelOptions from './ModelOptions';
import BackgroundOptions from './BackgroundOptions';
import Footer from './Footer.js';
import './App.css';
import { DropTarget, DragDropContainer } from "react-drag-drop-container";


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

    const [isDressVisible, setIsDressVisible] = useState(true);
    const [isHatVisible, setIsHatVisible] = useState(true);
    const [isShoeVisible, setIsShoeVisible] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isWardrobeVisible, setIsWardrobeVisible] = useState(true);

    const [selectedOutfit, setSelectedOutfit] = useState(null);
    const [modelImage, setModelImage] = useState("barbie");
    const [backgroundImage, setBackgroundImage] = useState("barbie");

    const [selectedHat, setSelectedHat] = useState(null);
    const [selectedDress, setSelectedDress] = useState(null);
    const [selectedShoe, setSelectedShoe] = useState(null);

    const handleOutfitClick = (outfitType) => {
        setSelectedOutfit(outfitType);
    };
    const handleOutfitItemClick = (outfitType) => {
        if (outfitType === 'hat1') {
            setSelectedHat('hat1');
        } else if (outfitType === 'dress') {
            setSelectedDress(outfitType);
        } else if (outfitType === 'shoe3') {
            setSelectedShoe('shoe3');
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
              <div className={`sidebar ${isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"}`}>
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
                                onDownloadClick={handleGetPDF}></ModelOptions>
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
                          dropData={"clothes"} style={"width:400px;"}>
                  <div className={`model ${modelImage}-model`}>
                  </div>
              </DropTarget>
              <Wardrobe selectedOutfit={selectedOutfit}
                        isWardrobeVisible={isWardrobeVisible}
                        isDressVisible={isDressVisible}
                        isHatVisible={isHatVisible}
                        isShoeVisible={isShoeVisible}
                        handleOutfitItemClick={handleOutfitItemClick}
                        onOutfitDragEnd={() => {
                            console.log("dropped");
                              if(selectedHat === "hat1"){
                                  console.log("hat1 dropped");
                                  setIsHatVisible(false);
                              }
                              if(selectedDress === "dress1"){
                                  console.log("dress1 dropped");
                                  setModelImage('barbie-2');
                                  setIsDressVisible(false);

                              }
                              if(selectedDress === "dress2"){
                                  console.log("dress2 dropped");
                                  setModelImage('barbie-3');
                                  setIsDressVisible(false);

                              }
                              if(selectedDress === "dress3"){
                                  console.log("dress3 dropped");
                                setModelImage('barbie-4');
                                setIsDressVisible(false);

                              }
                              if(selectedShoe === "shoe3"){
                                  console.log("shoe3 dropped");
                                  setIsShoeVisible(false);
                              }
                            }
                        }
                        >

              </Wardrobe>
          </div>
          <Footer></Footer>
      </div>
  );
}

export default App;
