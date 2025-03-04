import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch } = useContext(AppContext);
      const changeCurrency = (val)=>{
              dispatch({
                  type: 'CHG_CURRENCY',
                  payload: val,
              })
      }
      
    return (
          <div class="alert alert-success"> Currency {
        <select styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundcolor: state.isFocused ? 'while' : 'green',
            }),
          }} name="currency" id="currency" onChange={event=>changeCurrency(event.target.value)} >
          <option value="£">Uk(£)</option>
          <option value="₹">India(₹)</option>
          <option value="€">Europe(€)</option>
          <option value="CAD">Canada(CAD)</option>
        </select>	
        }	
      </div>
      );
  };
  export default Currency;