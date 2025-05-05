import CoordinatesModel from "../../../Models/CoordinatsModel";
import { PopularDetails } from "../PopularDetails/PopularDetails";
import "./TopFive.css";

interface TopFiveProps {
  popularSearchList: CoordinatesModel[];
}

export function TopFive({ popularSearchList }: TopFiveProps) {
  const hasData = popularSearchList?.length > 0;
  const topFive = hasData
    ? popularSearchList
    : Array(5).fill({ address: "-", hits: 0 });
  return (
    <div className="TopFive">
      <h3>רשימת 5 החיפושים הפופולריים</h3>
      <div>
        {topFive.map((p, index) => (
          <PopularDetails key={p.id || index} popular={p} />
        ))}
      </div>
    </div>
  );
}
