import React,{useState} from 'react';
import Output from './Output';

const Greetings = () => {
    const [changedText, setChangedText] = useState(false);
    const textChangeHandler = () => {
        setChangedText(true)
    }
  return (
    <div>
        <h2>Hello World!</h2>
        {!changedText && <Output>This is my webpage</Output>}
        {changedText && <Output>Changed!</Output>}
        <button onClick={textChangeHandler}>Change Text</button>
      
    </div>
  )
}

export default Greetings
