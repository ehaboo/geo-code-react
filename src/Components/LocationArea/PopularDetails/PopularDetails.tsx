import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./PopularDetails.css";

export function PopularDetails(props:{popular:CoordinatesModel}) {
    const {address, hits} = props.popular; 
    return (
        <div className="PopularDetails">
			<p>
                <span>{address}</span>
                <span>כתובת</span>
            </p>
            <p>
                <span>{hits}</span>
                <span>בקשות </span>
            </p>
        </div>
    );
}
