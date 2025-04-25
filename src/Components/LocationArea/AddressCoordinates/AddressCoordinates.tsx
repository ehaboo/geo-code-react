import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./AddressCoordinates.css";


interface AddressCoordinatesProps{
    coordinates:CoordinatesModel;
}
export function AddressCoordinates(props:AddressCoordinatesProps) {
    const {address, lat, lng} = props.coordinates;
    return (
        
        <div className="AddressCoordinates">
			<h3>
                הקואורדינטות של הכתובת
                <span>|</span> 
                <span>{address}</span>
            </h3>

            <p className="coordContainer">
                <span>קו רוחב</span>
                <span className="coorValue">{lat}</span>
            </p>
            
            <p className="coordContainer">
                <span>קו אורך</span>
                <span className="coorValue">{lng}</span>
            </p>

        </div>
    );
}
