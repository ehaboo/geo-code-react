import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./AddressCoordinates.css";


interface AddressCoordinatesProps{
    coordinates:CoordinatesModel;
}
export function AddressCoordinates(props:AddressCoordinatesProps) {
    const {address, lat, lng} = props.coordinates;
    return (
        
        <div className="AddressCoordinates flexContainer">
			<span>
                <span className="title1">הקואורדינטות של הכתובת</span> 
                <span className="address">{address}</span>
            </span>

            <span className="coordContainer">
                <span className="coorTitle">קו רוחב</span>
                <span className="coorValue">{lat}</span>
            </span>
            
            <span className="coordContainer">
                <span className="coorTitle">קו אורך</span>
                <span className="coorValue">{lng}</span>
            </span>

        </div>
    );
}
