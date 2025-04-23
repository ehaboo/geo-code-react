import CoordinatesModel from "../../../Models/CoordinatsModel";
import { PopularDetails } from "../PopularDetails/PopularDetails";
import "./TopFive.css";

interface TopFiveProps{
    popularSearchList:CoordinatesModel[]; 
}
export function TopFive(props:TopFiveProps) {
    const {popularSearchList} = props; 
    return (
        <div className="TopFive">
			<h3>רשימת 5 החיפושים הפופולריים</h3>
            {popularSearchList.map(p => <PopularDetails key={p.id} popular={p}/>)}
        </div>
    );
}
