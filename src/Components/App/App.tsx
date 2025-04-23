import './App.css'
import locationServices from '../../Services/LocationServices'
import { LocationInfo } from '../LocationInfo/LocationInfo';
import { ChangeEvent, useState } from 'react';
import CoordinatesModel from '../../Models/CoordinatsModel';

function App() {
  const [inputVal, setInputVal] = useState(""); 
  const [coordinates, setCoordinates] = useState<CoordinatesModel>();
  const [popularSearch, setPopularSearch] = useState<CoordinatesModel>();
  const [popularSearchList, setPopularSearchList] = useState<CoordinatesModel[]>();
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleClick = async () => {
   try {
    const dbCoordinates = await locationServices.getCoordinats(inputVal); 
    setCoordinates(dbCoordinates); 
    const dbPopularSearch = await locationServices.getPopularSearch();
    setPopularSearch(dbPopularSearch);
    const dbPopularSearchList = await locationServices.getPopularSearchList();
    setPopularSearchList(dbPopularSearchList)

    setIsDisplay(true);
    setInputVal("");
   } catch (error) {
      console.log(error);
   }
  }

  const handleChange = (args: ChangeEvent<HTMLInputElement>) => {
    const {value} = args.target; 
    setInputVal(value)
  }

  return (
    <>
      <LocationInfo coordinates={coordinates} popularSearch={popularSearch} popularSearchList={popularSearchList} isDisplay={isDisplay} setDisplay={setIsDisplay} />
      <div className="App">
        <div className='container'>
          <label>
            כתובת
          </label>
          <input type="text" value={inputVal} onChange={handleChange} />
          <hr />
          <button onClick={handleClick}>
            הצג את הקואורדינטות
          </button>
        </div>
      </div>
    </>
  )
}

export default App
