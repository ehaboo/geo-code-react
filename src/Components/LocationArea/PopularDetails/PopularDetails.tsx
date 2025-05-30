import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./PopularDetails.css";

interface PopularDetailsProps {
  popular?: CoordinatesModel;
}
export function PopularDetails({ popular }: PopularDetailsProps) {
  const { address, hits } = popular;
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
