import { useEffect, useState } from "react";
import CoordinatesModel from "../../../Models/CoordinatsModel";
import { AddressCoordinates } from "../AddressCoordinates/AddressCoordinates";
import { PopularAddress } from "../PopularAddress/PopularAddress";
import { TopFive } from "../TopFive/TopFive";
import "./LocationInfo.css";
import locationServices from "../../../Services/LocationServices";
import notifyService from "../../../Services/NotifyService";

interface LocationInfoProps{
    inputVal:string;
    clearInput: (val:string) => void
    isDisplay:boolean; 
    setDisplay: (value: boolean) => void
}

export function LocationInfo(props:LocationInfoProps) {
    const {inputVal, clearInput , isDisplay, setDisplay} = props; 
    const [coordinates, setCoordinates] = useState<CoordinatesModel>();
    const [popularSearch, setPopularSearch] = useState<CoordinatesModel>();
    const [popularSearchList, setPopularSearchList] = useState<CoordinatesModel[]>([]);
    

    useEffect(() => {
        locationServices.getCoordinats(inputVal)
            .then((dbCoordinates) => setCoordinates(dbCoordinates))
            .catch((error:unknown) =>notifyService.error(error))

        locationServices.getPopularSearch()
            .then((dbPopularSearch) => setPopularSearch(dbPopularSearch))
            .catch((error:unknown) =>notifyService.error(error))
        
        locationServices.getPopularSearchList()
            .then((dbPopularSearchList) => setPopularSearchList(dbPopularSearchList))
            .catch((error:unknown) =>notifyService.error(error))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const resetValues = () => {
        setDisplay(false);
        clearInput("");
    }
    return (
        <div className="LocationInfo" style={{"display":isDisplay ? "block" : "none"}}>
			<div className="locationInfo-content">
                {coordinates &&
                    <div className="address-coordinates">
                        <AddressCoordinates coordinates={coordinates}/>
                    </div>
                }
                {popularSearch &&
                <div className="popular-address">
                    <PopularAddress popularSearch={popularSearch} />
                </div>
                }
                {popularSearchList && 
                <div className="top-five">
                    <TopFive popularSearchList={popularSearchList}/>
                </div>
                }
            </div>
            <button onClick={resetValues}>סיום</button>
        </div>
    );
}
