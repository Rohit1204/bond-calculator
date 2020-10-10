import React from "react";
import PropTypes from "prop-types";
import './result.style.css'
import { Table } from 'reactstrap';

const Result = ({fvc, fvo,quantum,accrudintrst,accrudintrstdays,principalamount,settlementamnt }) => {
    console.log("######",fvo)
    return (
      <div 
      style={{
        display:"flex",
        justifyContent:"space-between",
      }}
      >
      <Table 
      style={{
          marginTop:"20px", 
          color:"#c57254",
          padding:"5px",
          width:"32%",
          textAlign : "center",
          border:"1px solid grey",
          borderRadius:"10px",
          }}>
        <thead>
        <tr>
           <td colspan = "3" style={{color:"aqua"}} >---</td>
        </tr>

    );
};


Result.defaultProps = {
    func: () => <p>Missing numeric value</p>,
    text: "No value provided"
  };
  
  Result.propTypes = {
    func: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
  };
  
  export default Result;