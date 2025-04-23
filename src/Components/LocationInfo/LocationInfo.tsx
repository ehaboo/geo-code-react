import CoordinatesModel from "../../Models/CoordinatsModel";
import "./LocationInfo.css";

interface LocationInfoProps{
    coordinates:CoordinatesModel; 
    popularSearch:CoordinatesModel;
    popularSearchList:CoordinatesModel[];
    isDisplay:boolean; 
    setDisplay: (value: boolean) => void
}

export function LocationInfo(props:LocationInfoProps) {
    const {coordinates ,popularSearch, popularSearchList , isDisplay, setDisplay} = props; 

    console.log(coordinates);
    console.log(popularSearch);
    console.log(popularSearchList);
    
    return (
        <div className="LocationInfo" style={{"display":isDisplay ? "block" : "none"}}>
			<div className="locationInfo-content">
                <div className="address-coordinates">
                    1
                </div>
                <div className="popular-address">
                    2
                </div>
                <div className="top-five">
                    3
                </div>
            <button onClick={() => setDisplay(false)}>סיים</button>
            </div>
        </div>
    );
}
