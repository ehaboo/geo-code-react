import "./App.css";
import { LocationInfo } from "../../LocationArea/LocationInfo/LocationInfo";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import notifyService from "../../../Services/NotifyService";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!isDisplay && inputVal?.trim() === "") {
      notifyService.error("נא להזין כתובת.");
      return;
    }
    setIsDisplay(true);
  };

  const handleChange = (args: ChangeEvent<HTMLInputElement>) => {
    const { value } = args.target;
    setInputVal(value);
  };

  return (
    <>
      <div className="App">
        <form className="container" onSubmit={handleSubmit}>
          <label>כתובת</label>
          <input type="text" value={inputVal} onChange={handleChange} />
          <hr />
          <button>הצג את הקואורדינטות</button>
        </form>
      </div>

      {isDisplay && (
        <LocationInfo
          inputVal={inputVal}
          clearInput={() => {setInputVal("")}}
          isDisplay={isDisplay}
          setDisplay={setIsDisplay}
        />
      )}
    </>
  );
}

export default App;
