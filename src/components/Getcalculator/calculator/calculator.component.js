import React from 'react'
import InputRange from "react-input-range";
import './GetCalculator.css'

export const Calculator = ({Price,bonds, handlePrice, handleChange,handleBond}) => {
    return (
      <div className='Calc'>
          {/* <label for="Settlement date">settlement date:</label> */}
          <input 
            style = {{background:'rgb(56,55,63)',color:"aqua",outline:"none",padding:"7px",float:"left", border:"1px solid #09C2DE",borderRadius:"5px",textAlign:"center"}}
            type="text" 
            id="ISIN" 
            name="ISIN" 
            placeholder="ISIN"
            onChange={handleChange}
        />
             <input 
                style = {{background:'rgb(56,55,63)',color:"aqua",outline:"none",padding:"7px",float:"right", border:"1px solid #09C2DE",borderRadius:"5px",textAlign:"center"}}
                type="text" 
                id="sdate" 
                name="stdate"
                placeholder="Settlement Date" 
                onChange={handleChange}
            />

            <br/>
            
            <h4 style={{color:"aqua"}}> Price : {Price}</h4>
           <InputRange
            step={1}
            maxValue={1000}
            minValue={1}
            value={Price}
            onChange={handlePrice}
          />
           <h4> Bonds : {bonds} </h4>
          <InputRange
            className="Input"
            step={1}
            maxValue={24}
            minValue={6}
            value={bonds}
            onChange={handleBond}
          />
      </div>
    )
}