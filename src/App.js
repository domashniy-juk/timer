import React, {useState, useEffect} from 'react';
import './App.css';



const App = () => {
  let [count,setCount] = useState(0)
  let [timer, setTimer] = useState(0.5)
 
  const start = () => {
    if(timer && !count){
      setCount(count++)
      setTimer(setInterval(() => setCount(count++), 1000))
    }
  }

  const change = () => {
    if(timer && count){
      clearInterval(timer)
      setTimer(0)
    }
    else if(count && !timer ){
      setCount(count++)
      setTimer(setInterval(() => setCount(count++), 1000))
    }
  }

  const remove = () => {
    setCount(0)
    clearInterval(timer)
    setTimer(0.5)
  }

  useEffect(() => () => clearInterval(timer),[])

  return (
    <main>
      <div className = 'circle'>
        <div className = 'arrow' style = {{transform: `rotate(${(count-15)*6}deg)`}}/>
      </div>
      <div className = 'count'>счетчик: {count}</div>
      <div>
        <button onClick = {start}>Старт</button>
        {timer ? <button onClick = {change}>Стоп</button> :
        <button onClick = {change}>Продолжить</button>} 
        <button onClick = {remove}>Сброс</button>
      </div>
    </main>
  )
}

export default App;
