import React, { useRef, useState} from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Wardrobe from "./Wardrobe";
import OutfitOptions from './OutfitOptions';
import ModelOptions from './ModelOptions';
import BackgroundOptions from './BackgroundOptions';
import './App.css';

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

    const [isBarbieDressVisible, setIsBarbieDressVisible] = useState(true);
    const [isBarbieHatVisible, setIsBarbieHatVisible] = useState(true);
    const [isBarbieShoeVisible, setIsBarbieShoeVisible] = useState(true);
    const [isBarbieClothesVisible, setIsBarbieClothesVisible] = useState(true);
    const [isMurphyClothesVisible, setIsMurphyClothesVisible] = useState(true);
    const [isMurphyShirtVisible, setIsMurphyShirtVisible] = useState(true);
    const [isMurphyHatVisible, setIsMurphyHatVisible] = useState(true);
    const [isMurphyShoeVisible, setIsMurphyShoeVisible] = useState(true);
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
    };

    const handleMurphyModelBtnClick = () => {
        setModelImage("murphy");
    };

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
                                 isBarbieDressVisible={setIsBarbieDressVisible}
                                 isBarbieHatVisible={setIsBarbieHatVisible}
                                 isBarbieShoeVisible={setIsBarbieShoeVisible}
                                 isMurphyShirtVisible={setIsMurphyShirtVisible}
                                 isMurphyHatVisible={setIsMurphyHatVisible}
                                 isMurphyShoeVisible={setIsMurphyShoeVisible}
                                 onOutfitOptionsClick={handleOutfitClick}
                                 setIsMurphyClothesVisible={setIsMurphyClothesVisible}
                                 setIsBarbieClothesVisible={setIsBarbieClothesVisible}
                                 modelImage={modelImage}></OutfitOptions>
                  <ModelOptions onBarbieModelBtnClick={handleBarbieModelBtnClick}
                                onMurphyModelBtnClick={handleMurphyModelBtnClick}
                                setIsMurphyClothesVisible={setIsMurphyClothesVisible}
                                setIsBarbieClothesVisible={setIsBarbieClothesVisible}
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
              <div className={`model ${modelImage}-model`}>
              </div>
              <Wardrobe selectedOutfit={selectedOutfit}
                        isWardrobeVisible={isWardrobeVisible}
                        isBarbieHatVisible={isBarbieHatVisible}
                        isBarbieDressVisible={isBarbieDressVisible}
                        isBarbieShoeVisible={isBarbieShoeVisible}
                        isMurphyShirtVisible={isMurphyShirtVisible}
                        isMurphyHatVisible={isMurphyHatVisible}
                        isMurphyShoeVisible={isMurphyShoeVisible}
                        setModelImage={setModelImage}
                        isBarbieClothesVisible={isBarbieClothesVisible}
                        isMurphyClothesVisible={isMurphyClothesVisible}
                        handleOutfitItemClick={handleOutfitItemClick}>
              </Wardrobe>
          </div>
      </div>
  );
}

export default App;
