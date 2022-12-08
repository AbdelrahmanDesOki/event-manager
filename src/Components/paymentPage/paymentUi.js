import { useEffect, useRef, useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const MIN_VALUE = 1000;
const MAX_VALUE = 10000;

function App() {
  const [random] = useState(
    Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE) / 100
  );
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');


  const ref = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

 

  return (
    <div className='app'>
      <div className='app__window'>
        <div className='app__window-left'>
          <img src='./background-standing.jpeg' className='image' alt='' />
          <div className='window__left-card'>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </div>
        </div>
        <div className='app__window-right'>
          <div className='window__right-body'>
            <form className='window__form' onSubmit={handleSubmit(onSubmit)} >
              <h2 className='window__form-title'>Payment details</h2>
              <label htmlFor='cardnumber'>
                Card number
                <input 
                  id='cardnumber'
                  //try with 34-45-56
                  name='number'
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  ref={ref}
                  pattern="[0-9]{16}"
                />
              </label>
              <label htmlFor='cardholder'>
                Card holder name
                <input
                  id='cardholder'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  ref={ref}
                />
              </label>
              <div className='window__form-bottom'>
                <label htmlFor='expiry'>
                  Expiry date
                  <input
                    id='expiry'
                    name='expiry'
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    ref={ref}
                     pattern="[0-2]{1}[0-3]{1}[2-9]{2}"
                  />
                </label>
                
                <label htmlFor='cvc'>
                  CVC
                  <input
                    id='cvc'
                    name='cvc'
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    ref={ref}
                    pattern="[0-9]{3}"
                  />
                </label>
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <a href= "/success.html">
              <button  type='submit' name='checkout'>Pay {random} €</button>
              </a>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;