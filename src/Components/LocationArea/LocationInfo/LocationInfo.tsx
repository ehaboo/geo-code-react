import CoordinatesModel from "../../../Models/CoordinatsModel";
import { AddressCoordinates } from "../AddressCoordinates/AddressCoordinates";
import { PopularAddress } from "../PopularAddress/PopularAddress";
import { TopFive } from "../TopFive/TopFive";
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

    
    return (
        <div className="LocationInfo" style={{"display":isDisplay ? "block" : "none"}}>
			<div className="locationInfo-content">
                <div className="address-coordinates">
                    <AddressCoordinates coordinates={coordinates}/>
                </div>
                
                <div className="popular-address">
                    <PopularAddress popularSearch={popularSearch} />
                </div>

                <div className="top-five">
                    <TopFive popularSearchList={popularSearchList}/>
                </div>
            <button onClick={() => setDisplay(false)}>סיום</button>
            </div>
        </div>
    );
}
