import React from 'react'
import InputRange from "react-input-range";
import './yieldcalculator.css'

export const Calculator = ({Yield,Bond, handleYield, handleChange,handleBond}) => {
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
            
            <h4 style={{color:"aqua"}}> Yield : {Yield}</h4>
           <InputRange
            step={1}
            maxValue={30}
            minValue={1}
            value={Yield}
            onChange={handleYield}
          />
           {/* <h4> Bonds : {Bond} </h4>
          <InputRange
            className="Input"
            step={1}
            maxValue={24}
            minValue={6}
            value={Bond}
            onChange={handleBond}
          /> */}
      </div>
    )
}