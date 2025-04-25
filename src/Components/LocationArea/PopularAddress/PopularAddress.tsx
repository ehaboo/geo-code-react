import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./PopularAddress.css";

export function PopularAddress(props:{popularSearch:CoordinatesModel}) {
    const {address, hits} = props.popularSearch;
    return (
        <div className="PopularAddress">
            <h3>
                החיפוש הפופולרי ביותר   
                <span>|</span> 
                <span>{address}</span>
            </h3>
            <p>
                <span className="hitsVal">{hits}</span>
                <span>בקשות</span>
            </p>
        </div>
    );
}
