import CoordinatesModel from "../../../Models/CoordinatsModel";
import "./PopularAddress.css";

interface PopularAddressProps {
  popularSearch?: CoordinatesModel;
}
export function PopularAddress({ popularSearch }: PopularAddressProps) {
  const isValid = popularSearch?.id > 0;
  const address = isValid ? popularSearch.address : "אין תוצאות להצגה.";
  const hits = isValid ? popularSearch.hits : 0;

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
