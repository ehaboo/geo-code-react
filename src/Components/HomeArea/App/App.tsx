import './App.css'
import { LocationInfo } from '../../LocationArea/LocationInfo/LocationInfo';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import notifyService from '../../../Services/NotifyService';

function App() {
  const [inputVal, setInputVal] = useState(""); 
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  

  const handleSubmit = async (e:SyntheticEvent) => {
   try {    
    e.preventDefault()
    setIsDisplay(true);
   } catch (error:unknown) {
      notifyService.error(error)
   }
  }

  const handleChange = (args: ChangeEvent<HTMLInputElement>) => {
    const {value} = args.target; 
    setInputVal(value)
  }

  return (
    <>
      {isDisplay && <LocationInfo inputVal={inputVal} clearInput={setInputVal} isDisplay={isDisplay} setDisplay={setIsDisplay} />}
      <div className="App">
        <form className='container' onSubmit={handleSubmit}>
          <label>
            כתובת
          </label>
          <input type="text" value={inputVal} onChange={handleChange} required/>
          <hr />
          <button>
            הצג את הקואורדינטות
          </button>
        </form>
      </div>
    </>
  )
}

export default App
