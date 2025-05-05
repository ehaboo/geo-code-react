import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./AddressCoordinates.css";

interface AddressCoordinatesProps {
  coordinates?: CoordinatesModel;
}

export function AddressCoordinates({ coordinates }: AddressCoordinatesProps) {
  const isValid = coordinates?.id > 0;
  const address = isValid ? coordinates.address : "לא נמצאה כתובת כזו.";
  const lat = isValid ? coordinates.lat : 0;
  const lng = isValid ? coordinates.lng : 0;

  return (
    <div className="AddressCoordinates">
      <h3>
        הקואורדינטות של הכתובת
        <span> | </span>
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
