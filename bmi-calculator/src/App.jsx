import { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70)

  function onWeightChange(e) {
    setWeight(e.target.value)
  }

  function onHeightChange(e) {
    setHeight(e.target.value)
  }

  const output = useMemo(() => {
    const calHeight = height/100;

    return (weight/(calHeight*calHeight)).toFixed(1)
  },[weight, height])
  
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight}kg</p>
        <input type="range" className='input-slider' step="1" min="40" max="200" onChange={onWeightChange}/>
        <p className='slider-output'>Height: {height}cm</p>
        <input type="range" className='input-slider' step="1" min="140" max="220" onChange={onHeightChange}/>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
