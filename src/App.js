import { useState } from "react"
import MapContainer from "./MapContainer"
import JsonTest from "./JsonTest"

function App() {
  const [ input,setInput ] = useState("")

  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <div>
        <p>hello world!</p>
        <MapContainer />
        <div>
          <input type="radio" name="param" value="기아" onChange={handleChange}/>기아
          <br />
          <input type="radio" name="param" value="대창모터스" onChange={handleChange}/>대창모터스
          <JsonTest param={input} />
        </div>
      </div>
    </div>
  )
}

export default App