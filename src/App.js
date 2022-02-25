import { useState } from 'react';

const App = () => {
  //STATE
  const [isRadio, setIsRadio] = useState(5);

  // HANDLE THE ONCHANGE HERE
  const handleChange = (e) => {
    // string passed in
    // a string returned by default
    console.log(e.currentTarget.value);
    // add + to the event to make the value a number
    setIsRadio(+e.currentTarget.value);
  };

  return (
    <div className='App'>
      <h1>Radio Journey</h1>
      <ul className='radios'>
        <li>
          <input
            type='radio'
            id='radio1'
            value='1'
            onChange={handleChange}
            checked={isRadio === 1}
          />
          <label htmlFor='num1'>1</label>
        </li>
        <li>
          <input
            type='radio'
            id='radio2'
            value='2'
            onChange={handleChange}
            checked={isRadio === 2}
          />
          <label htmlFor='num2'>2</label>
        </li>
        <li>
          <input
            type='radio'
            id='radio3'
            value='3'
            onChange={handleChange}
            checked={isRadio === 3}
          />
          <label htmlFor='num3'>3</label>
        </li>
        <li>
          <input
            type='radio'
            id='radio4'
            value='4'
            onChange={handleChange}
            checked={isRadio === 4}
          />
          <label htmlFor='num4'>4</label>
        </li>
        <li>
          <input
            type='radio'
            id='radio5'
            value='5'
            onChange={handleChange}
            checked={isRadio === 5}
          />
          <label htmlFor='num5'>5</label>
        </li>
      </ul>
  
    </div>
  );
};

export default App;
