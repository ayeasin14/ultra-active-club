import { useState } from 'react';
import './App.css';
import FrequintlyAskQuestion from './components/FrequintlyAskQuestion/FrequintlyAskQuestion';
import Header from './components/Header/Header';
import Places from './components/Places/Places';

function App() {


  let newCount = [];
  const [count, setCount] = useState([])

  const addToListHandler = (time) => {
    newCount = [...count, time]
    setCount(newCount)
  }

  return (
    <div>
      <Header></Header>
      <Places
        addToListHandler={addToListHandler}
        count={count}
      ></Places>
      <FrequintlyAskQuestion></FrequintlyAskQuestion>
    </div>
  );
}

export default App;
