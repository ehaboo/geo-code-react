import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./PopularAddress.css";

export function PopularAddress(props:{popularSearch:CoordinatesModel}) {
    const {address, hits} = props.popularSearch;
    return (
        <div className="PopularAddress flexContainer">
            <span>
                <span className="title1">החיפוש הפופולרי ביותר</span> 
                <span className="address">{address}</span>
            </span>
            <span>
                <span className="hitsVal">{hits}</span>
                <span>בקשות</span>
            </span>
        </div>
    );
}
